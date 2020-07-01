import { Injectable } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';

import { QuestionItem } from '../components/questions/question-item';
import { TextQuestionComponent } from '../components/questions/text-question/text-question.component';
import { DropdownQuestionComponent } from '../components/questions/dropdown-question/dropdown-question.component';
import { TextAreaQuestionComponent } from '../components/questions/textarea-question/textarea-question.component';
import { DateQuestionComponent } from '../components/questions/date-question/date-question.component';
import { CurrencyQuestionComponent } from '../components/questions/currency-question/currency-question.component';
import { GridQuestionComponent } from '../components/questions/grid-question/grid-question.component';
import { FormDataModel } from '../models/form-data.model';
import {
  QuestionDataModel,
  ValidationDataModel,
} from '../models/question-data.model';
import { FormViewModel } from '../view-models/form.viewmodel';

@Injectable()
export class FormViewService {
  constructor() {}

  public getFormViewModel(form: FormDataModel) {
    const formViewModel = new FormViewModel();
    const formGroup = new FormGroup({});
    const questions: Array<QuestionItem> = [];

    if (form && form.questions) {
      for (let question of form.questions) {
        let questionItem = this.createQuestion(question);

        formGroup.addControl(question.id, questionItem.formControl);
        questions.push(questionItem);
      }
    }

    formViewModel.heading = form.heading;
    formViewModel.formGroup = formGroup;
    formViewModel.questionItems = questions;

    return formViewModel;
  }

  public createQuestion(question: QuestionDataModel): QuestionItem {
    let formControl = new FormControl(
      question.answer,
      this.getValidators(question)
    );

    let questionItem: QuestionItem;

    if (question.type === 'text') {
      questionItem = new QuestionItem(
        TextQuestionComponent,
        question,
        formControl
      );
    }

    if (question.type === 'dropdown') {
      questionItem = new QuestionItem(
        DropdownQuestionComponent,
        question,
        formControl
      );
    }

    if (question.type === 'textarea') {
      questionItem = new QuestionItem(
        TextAreaQuestionComponent,
        question,
        formControl
      );
    }

    if (question.type === 'date') {
      questionItem = new QuestionItem(
        DateQuestionComponent,
        question,
        formControl
      );
    }

    if (question.type === 'currency') {
      questionItem = new QuestionItem(
        CurrencyQuestionComponent,
        question,
        formControl
      );
    }

    if (question.type === 'grid') {
      questionItem = new QuestionItem(
        GridQuestionComponent,
        question,
        formControl
      );
    }

    return questionItem;
  }

  getValidators(question: QuestionDataModel): ValidatorFn[] {
    let validators = Array<ValidatorFn>();

    if (question && question.validations) {
      for (let key in question.validations) {
        let value = question.validations[key];

        validators.push(this.createValidation(key, value));
      }
    }

    return validators;
  }

  createValidation(type: string, validation: ValidationDataModel): ValidatorFn {
    if (type === 'required') {
      return Validators.required;
    } else if (type === 'maxlength') {
      console.log(validation);
      return Validators.maxLength(validation.length ?? 100);
    }
  }
}

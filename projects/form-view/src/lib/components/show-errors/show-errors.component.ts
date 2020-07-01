import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  QuestionDataModel,
  ValidationDataModel,
} from '../../models/question-data.model';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css'],
})
export class ShowErrorsComponent implements OnInit {
  @Input() control: FormControl;
  @Input() question: QuestionDataModel;

  constructor() {}

  ngOnInit(): void {}

  shouldShowErrors(): boolean {
    return this.control && this.control.errors && this.control.touched;
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map((key) =>
      this.getMessage(<ValidationDataModel>this.question.validations[key], key)
    );
  }

  getMessage(validation: ValidationDataModel, key: string): string {
    if (!validation.message) {
      if (key == 'required') {
        return 'This field is required.';
      } else {
        return '<< Please provide a message for this validation >>';
      }
    }

    return validation.message;
  }
}

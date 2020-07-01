import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { QuestionComponent } from '../question-component';
import { QuestionDataModel } from '../../../models/question-data.model';

@Component({
  selector: 'app-textarea-question',
  templateUrl: './textarea-question.component.html',
  styleUrls: ['./textarea-question.component.css'],
})
export class TextAreaQuestionComponent extends QuestionComponent {
  @Input() formControl: FormControl;
  @Input() data: QuestionDataModel;

  get placeholder(): string {
    return this.isRequired ? 'Required' : '';
  }

  get maxlength(): number {
    return this.data.validations && this.data.validations['maxlength'] != null
      ? this.data.validations['maxlength'].length
      : null;
  }
}

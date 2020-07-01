import { Component, Input } from '@angular/core';

import { QuestionComponent } from '../question-component';
import { QuestionDataModel } from '../../../models/question-data.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.css'],
})
export class TextQuestionComponent extends QuestionComponent {
  @Input() formControl: FormControl;
  @Input() data: QuestionDataModel;

  get placeholder(): string {
    return this.isRequired ? 'Required' : '';
  }

  get maxlength(): number {
    return this.data.validations && this.data.validations['maxlength'] != null ? this.data.validations['maxlength'].length : null;
  }
}

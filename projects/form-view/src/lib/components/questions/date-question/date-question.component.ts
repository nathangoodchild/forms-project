import { Component, Input } from '@angular/core';

import { QuestionComponent } from '../question-component';
import { QuestionDataModel } from '../../../models/question-data.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-question',
  templateUrl: './date-question.component.html',
  styleUrls: ['./date-question.component.css'],
})
export class DateQuestionComponent extends QuestionComponent {
  @Input() formControl: FormControl;
  @Input() data: QuestionDataModel;

  get placeholder(): string {
    return null;
  }

  get maxlength(): number {
    return null;
  }
}

import { Component, Input } from '@angular/core';

import { QuestionComponent } from '../question-component';
import { QuestionDataModel } from '../../../models/question-data.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-currency-question',
  templateUrl: './currency-question.component.html',
  styleUrls: ['./currency-question.component.css']
})
export class CurrencyQuestionComponent extends QuestionComponent {
  @Input() formControl: FormControl;
  @Input() data: QuestionDataModel;

  get placeholder(): string {
    return null;
  }

  get maxlength(): number {
    return null;
  }
}

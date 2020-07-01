import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { QuestionComponent } from '../question-component';
import { QuestionDataModel } from '../../../models/question-data.model';

@Component({
  selector: 'app-grid-question',
  templateUrl: './grid-question.component.html',
  styleUrls: ['./grid-question.component.css'],
})
export class GridQuestionComponent extends QuestionComponent {
  @Input() formControl: FormControl;
  @Input() data: QuestionDataModel;

  constructor() {
    super();
  }

  columnTypes: any = {
    currencyColumn: {
      valueFormatter: GridQuestionComponent.currencyFormatter,
    },
  };

  get rowData(): any {
    return this.data.rowData;
  }

  get placeholder(): string {
    return null;
  }

  get maxlength(): number {
    return null;
  }

  static currencyFormatter(params: any) {
    var currencyFormat = new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 2,
    });
    return currencyFormat.format(params.value);
  }
}

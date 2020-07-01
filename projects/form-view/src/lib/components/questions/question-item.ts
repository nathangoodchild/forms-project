import { Type } from '@angular/core';
import { FormControl } from '@angular/forms';

import { QuestionDataModel } from '../../models/question-data.model';
import { QuestionComponent } from './question-component';

export class QuestionItem {
  constructor(public component: Type<QuestionComponent>, public data: QuestionDataModel, public formControl: FormControl){}
}

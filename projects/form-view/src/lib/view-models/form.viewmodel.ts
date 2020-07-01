import { FormGroup } from '@angular/forms';

import { QuestionItem } from '../components/questions/question-item';

export class FormViewModel {
  formGroup: FormGroup;
  heading: string;
  questionItems: Array<QuestionItem>
}

import { FormControl } from '@angular/forms';

import { QuestionDataModel } from '../../models/question-data.model';

export abstract class QuestionComponent {
  data: QuestionDataModel;
  formControl: FormControl;

  public get isRequired(): boolean {
    return this.data.validations && this.data.validations['required'] != null;
  }

  public get isInvalid(): boolean {
    return (
      (this.formControl.touched || this.formControl.dirty) &&
      !this.formControl.valid
    );
  }

  abstract get placeholder(): string;
  abstract get maxlength(): number;
}

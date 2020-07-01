import { Component, Input } from '@angular/core';

import { FormViewModel } from '../../view-models/form.viewmodel';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
})
export class FormViewComponent {
  @Input() form: FormViewModel;

  constructor() {}
}

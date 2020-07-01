import { Injectable } from '@angular/core';

import { FormDataModel } from 'form-view';

@Injectable({ providedIn: 'root' })
export class FormStateService {
  formData: FormDataModel;

  loadForm(form: FormDataModel) {
    this.formData = { ...form };
  }

  setForm(form: FormDataModel) {
    this.formData = { ...form };
  }
}

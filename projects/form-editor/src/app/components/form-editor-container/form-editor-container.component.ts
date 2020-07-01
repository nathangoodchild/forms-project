import { Component, } from '@angular/core';
import { FormDataModel, FormViewService, FormViewModel } from 'form-view';

import { FormStateService } from '../../services/form-state.service';
import SampleForm from '../../../assets/form.json';

@Component({
  selector: 'app-form-editor-container',
  templateUrl: './form-editor-container.component.html',
  styleUrls: ['./form-editor-container.component.css'],
})
export class FormEditorContainerComponent {
  formViewModel: FormViewModel;

  get formData(): FormDataModel {
    return this.formStateService.formData;
  }

  get formView(): FormViewModel {
    return this.formViewModel;
  }

  constructor(
    private formStateService: FormStateService,
    private formService: FormViewService
  ) {
    formStateService.loadForm(<FormDataModel>SampleForm);
    this.formViewModel = this.formService.getFormViewModel(
      this.formStateService.formData
    );
  }

  update(form: FormDataModel) {
    this.formStateService.setForm(form);
    this.formViewModel = this.formService.getFormViewModel(
      this.formStateService.formData
    );
  }
}

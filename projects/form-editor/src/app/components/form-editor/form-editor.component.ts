import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FormDataModel } from 'form-view';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css'],
})
export class FormEditorComponent {
  @Input() form: FormDataModel;

  @Output() updateForm = new EventEmitter<FormDataModel>();

  constructor() {}

  onChange(value: string) {
    this.update(value, this.updateForm);
  }

  update(value: string, emitter?: EventEmitter<FormDataModel>) {
    const jsonObj = this.tryParseJSON(value);
    if (!jsonObj) {
      return;
    }

    emitter.emit(jsonObj);
  }

  tryParseJSON(jsonString): any {
    try {
      let jsonObj = JSON.parse(jsonString);
      if (jsonObj && typeof jsonObj === 'object') {
        return jsonObj;
      }
    } catch (e) {}

    return false;
  }
}

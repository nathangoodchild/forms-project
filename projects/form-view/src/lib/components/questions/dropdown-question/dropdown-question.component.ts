import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { QuestionComponent } from '../question-component';
import {
  QuestionDataModel,
  OptionDataModel,
} from '../../../models/question-data.model';
// import { ReferenceDataService } from 'src/app/services/reference-data.service';

@Component({
  selector: 'app-dropdown-question',
  templateUrl: './dropdown-question.component.html',
  styleUrls: ['./dropdown-question.component.css'],
})
export class DropdownQuestionComponent extends QuestionComponent
  implements OnInit {
  @Input() formControl: FormControl;
  @Input() data: QuestionDataModel;

  options: Array<OptionDataModel>;

  // constructor(private referenceService: ReferenceDataService) {
  //   super();
  // }

  ngOnInit() {
    // if(this.data.optionsUrl){
    //   this.referenceService
    //   .getOptions(this.data.optionsUrl)
    //   .subscribe((options) => (this.options = options));
    // }
  }

  get placeholder(): string {
    return this.isRequired ? 'Please select' : '';
  }

  get maxlength(): number {
    return null;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuestionDirective } from './components/questions/question.directive';
import { FormViewService } from './services/form-view.service';
import { FormViewComponent } from './components/form-view/form-view.component';
import { QuestionContainerComponent } from './components/questions/question-container.component';
import { TextQuestionComponent } from './components/questions/text-question/text-question.component';
import { DropdownQuestionComponent } from './components/questions/dropdown-question/dropdown-question.component';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import { TextAreaQuestionComponent } from './components/questions/textarea-question/textarea-question.component';
import { DateQuestionComponent } from './components/questions/date-question/date-question.component';
import { CurrencyQuestionComponent } from './components/questions/currency-question/currency-question.component';
import { GridQuestionComponent } from './components/questions/grid-question/grid-question.component';

@NgModule({
  declarations: [
    FormViewComponent,
    QuestionContainerComponent,
    QuestionDirective,
    TextQuestionComponent,
    DropdownQuestionComponent,
    ShowErrorsComponent,
    TextAreaQuestionComponent,
    DateQuestionComponent,
    CurrencyQuestionComponent,
    GridQuestionComponent,
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormViewComponent],
  providers: [FormViewService],
})
export class FormViewModule {}

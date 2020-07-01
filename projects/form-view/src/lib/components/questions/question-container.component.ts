import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewChild,
  ComponentFactoryResolver,
} from '@angular/core';

import { QuestionDirective } from './question.directive';
import { QuestionItem } from './question-item';
import { QuestionComponent } from './question-component';

@Component({
  selector: 'app-question',
  template: `
    <div class="question">
      <ng-template appQuestion></ng-template>
    </div>
  `,
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent implements OnInit, OnDestroy {
  @Input() question: QuestionItem;
  @ViewChild(QuestionDirective, { static: true })
  appQuestion: QuestionDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  ngOnDestroy(): void {}

  loadComponent() {
    const questionItem = this.question;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      questionItem.component
    );
    const viewContainerRef = this.appQuestion.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<QuestionComponent>componentRef.instance).data = questionItem.data;
    (<QuestionComponent>componentRef.instance).formControl = questionItem.formControl;
  }
}

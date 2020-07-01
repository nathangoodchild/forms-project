import { QuestionDataModel } from './question-data.model';

export interface FormDataModel {
  heading: string;
  questions: Array<QuestionDataModel>;
}

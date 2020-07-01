export interface QuestionDataModel {
  type: string;
  id: string;
  label: string;
  answer?: string;
  options?: Array<OptionDataModel>;
  optionsUrl?: string;
  validations?: Validations;
  columnDefs?: Array<ColumnDataModel>;
  rowData?: Array<any>;
}

export interface OptionDataModel {
  text: string;
  value: string;
}

export interface ValidationDataModel {
  message?: string;
  length?: number;
}

export declare type Validations = {
  [key: string]: ValidationDataModel;
};

export interface ColumnDataModel {
  header: string;
  field: string;
  editable: boolean;
  type: Array<string>;
}

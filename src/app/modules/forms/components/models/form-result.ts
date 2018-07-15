
export class FormResult {
  formId: string;
  results: any[];
  _id: number;
  username: string;

  constructor(formId: string , results: any[] , resultId?: number) {
  this.formId = formId;
  this.results = results;
  this._id = resultId;
  }
}

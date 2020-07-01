import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';

import { OptionDataModel } from 'form-view';

@Injectable({
  providedIn: 'root',
})
export class ReferenceDataService {
  constructor(private http: HttpClient) {}

  optionsCache = {};

  public getOptions(optionType: string): Observable<Array<OptionDataModel>> {
    if (this.optionsCache[optionType]) {
      return this.optionsCache[optionType];
    }

    this.optionsCache[optionType] = this.http
      .get<Array<OptionDataModel>>('assets/' + optionType + '.json')
      .pipe(
        shareReplay(1),
        catchError((err) => {
          delete this.optionsCache[optionType];
          return EMPTY;
        })
      );
    return this.optionsCache[optionType];
  }
}

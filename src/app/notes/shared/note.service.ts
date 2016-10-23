import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ApiService, StoreHelperService } from '../../core';

@Injectable()
export class NoteService {
  path: string = '/notes';
  constructor(
    private apiService: ApiService,
    private storeHelper: StoreHelperService
  ) {}

  createNote(note: {}): Observable<any> {
    return this.apiService.post(this.path, note)
    .do(savedNote => this.storeHelper.add('notes', savedNote));
  }

  getNotes(): Observable<any> {
    return this.apiService.get(this.path)
    .do(res => this.storeHelper.update('notes', res.data));
  }

  completeNote(note: {id: number}): Observable<any> {
    return this.apiService.delete(`${this.path}/${note.id}`)
    .do(res => this.storeHelper.findAndDelete('notes', res.id));
  }
}

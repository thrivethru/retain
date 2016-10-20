import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
@Injectable()
export class StoreHelperService {
  constructor(private store: StoreService) {}

  update(prop: any, state: Object) {
    const currentState = this.store.getState();
    this.store.setState(Object.assign({}, currentState, { [prop]: state }));
  }

  add(prop: any, state: Object) {
    const currentState = this.store.getState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, { [prop]: [state, ...collection] }));
  }

  findAndUpdate(prop: any, state: {id?: string | number}) {
    const currentState = this.store.getState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, {[prop]: collection.map((item: any) => {
      if (item.id !== state.id) {
        return item;
      }
      return Object.assign({}, item, state);
    })}));
  }

  findAndDelete(prop: any, id: string | number) {
    const currentState = this.store.getState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, {[prop]: collection.filter((item: any) => item.id !== id)}));
  }
}

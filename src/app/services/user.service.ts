import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectCurrentUser} from "../store/selectors/user.selector";
import {AppState} from "../store/state";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$ = this._store.pipe(select(selectCurrentUser))
  user!: any

  constructor(private _store: Store<AppState>) {
    this.user$.subscribe(user => {
      this.user = user
    })
  }
}

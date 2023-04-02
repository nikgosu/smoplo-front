import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../../store/state";
import {selectCurrentUser} from "../../../../../store/selectors/user.selector";
import {GetIsAuth, LogoutSuccess} from "../../../../../store/actions/user.actions";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  user$ = this._store.pipe(select(selectCurrentUser))
  isAuth = false
  constructor(
    private _store: Store<AppState>
  ) {
    this.user$.subscribe(user => {
      this.isAuth = !!user
    })
  }

  logout() {
    this._store.dispatch(new LogoutSuccess())
  }
}

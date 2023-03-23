import {Component} from '@angular/core';
import {GetIsAuth} from "../../store/actions/user.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smolpo'

  constructor(
    private _store: Store<AppState>
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token' ?? '')
    token && this._store.dispatch(new GetIsAuth(token))
  }
}

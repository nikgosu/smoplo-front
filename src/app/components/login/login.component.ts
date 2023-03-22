import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AppState} from "../../store/state";
import {select, Store} from "@ngrx/store";
import {CreateUser, Login} from "../../store/actions/user.actions";
import {Router} from "@angular/router";
import {selectSelectedCreative} from "../../store/selectors/creatives.selector";
import {selectCurrentUser} from "../../store/selectors/user.selector";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup<any>({
    email: '',
    password: ''
  })
  user$ = this._store.pipe(select(selectCurrentUser))

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.form = this._formBuilder.group({
      email: '',
      password: ''
    })

  }

  handleLogin() {
    this._store.dispatch(new Login(this.form.value))
  }

  handleRegister() {
    this._store.dispatch(new CreateUser(this.form.value))
  }
}

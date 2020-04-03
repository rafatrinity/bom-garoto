import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SessionService } from '../services/session.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private session: SessionService, private fb: FormBuilder) { }
  login: FormGroup;
  hide = true;
  ngOnInit(): void {
    this.login = this.fb.group({
      email: [null],
      password: [null]
    });

  }
  onSubmit() {
    this.session.login(this.login.value).subscribe(
      ok=>{
        console.log(ok);
      },
      err=>{
        console.error(err);
      }
    );

  }
}

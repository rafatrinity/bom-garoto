import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  idOng: string = 'ola';
  constructor(private session: SessionService) { }

  ngOnInit(): void {
  }

  logar() {
    this.session.login(this.idOng);
  }
}

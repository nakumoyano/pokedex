import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  visible = true;
  changetype: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  mostrarPassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}

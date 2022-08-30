import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [
    `
    label {
      display: block;
    }
    .error input { 
      border: 1px solid red; 
    }
    .error label {
      color: red;
    }
    `
  ],
})
export class LoginFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm): void {
    console.log(loginForm.value);
  }
}

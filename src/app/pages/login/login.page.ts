import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";


  constructor(private router: Router) { }

  ngOnInit() { }

  public recuperar = [
    { type: 'textarea', placeholder: 'Ingrese su correo para enviar link de recuperación' },
  ];
}

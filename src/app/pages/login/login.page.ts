import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
//aquí podemos crear variables, constrantes, listas, arreglos, json, etc:
  //NOMBRE_VARIABLE: TIPO_DATO = VALOR;

  titulo: string = "PÁGINA DE LOGIN";
  numero: number = 5;
  decimal: number = 5.2;
  existe: boolean = true;
  fecha_hoy: Date = new Date();
  nombres: string[] = ["Pedro","Juan","Diego"];
  persona: any = {"nombre":"Jeison", "edad": 5};


 //NgModel:
 email: string = "";
 password: string = "";

 //Variables para mostrar la contraseña
 tipoContrasenia: string = 'password';  
 iconoContrasenia: string = 'eye';  

  email: string = "";
  password: string = "";


  constructor(private router: Router) { }

<<<<<<< HEAD
  ngOnInit() {
  }
  
  //método asociado al boton para hacer un login:
  login(){
    if(this.email=="" && this.password==""){
      this.router.navigate(['/home']);
    }else{
      alert("CORREO O CONTRASEÑA INCORRECTOS!");
    }
  }


  mostrarClave() {
    if (this.tipoContrasenia === 'password') {
      this.tipoContrasenia = 'text';       
      this.iconoContrasenia = 'eye-off';  
    } else {
      this.tipoContrasenia = 'password';   
      this.iconoContrasenia = 'eye';       
    }
  }

=======
  ngOnInit() { }

  public recuperar = [
    { type: 'textarea', placeholder: 'Ingrese su correo para enviar link de recuperación' },
  ];
>>>>>>> f81d795ff7d03066083a8a11a75abb53218a9ef0
}


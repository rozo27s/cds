import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(form : NgForm){// se debe ejecutar "ng generate guard login" para darle fincionalodad a la restriccion de rutas
 
  if (form.value.email=="javier" && form.value.password=="1234") {
    localStorage.setItem('email',form.value.else);
    this.router.navigate(['/tienda']);
  } else {
    if (form.value.email=='rozo27s' && form.value.password=='278814') {
      localStorage.setItem('admin',form.value.else);
      this.router.navigate(['administrador']);
      console.log(form.value.else);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
  }
}

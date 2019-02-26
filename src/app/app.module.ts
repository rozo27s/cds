import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';//importar router para navegar entre rutas ademas agregar <router-outlet></router-outlet>

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PublicidadComponent } from './Componentes/publicidad/publicidad.component';
import { TiendaComponent } from './Componentes/tienda/tienda.component';
import {FormsModule} from '@angular/forms';//importar para formularios importante
import { LoginGuard } from './login.guard';//importar para bloquear rutas 
import { NotLoginGuard } from './not-login.guard';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginAdminGuard } from './login-admin.guard';

const rutas : Routes =[
  {path:'', redirectTo:'/principal', pathMatch:'full'},
  {path:'login', component: LoginComponent, canActivate:[NotLoginGuard]},
  {path:'publicidad', component: PublicidadComponent, canActivate:[LoginGuard]},
  {path:'tienda', component:TiendaComponent, canActivate: [LoginGuard]},
  {path:'administrador', component: AdministradorComponent, canActivate: [LoginAdminGuard]},
  {path:'principal', component:PrincipalComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicidadComponent,
    TiendaComponent,
    AdministradorComponent,
    PrincipalComponent
  ],
  imports: [
    FormsModule,//para formularios 
    RouterModule.forRoot(rutas),
    HttpClientModule,
    BrowserModule
  ],
  providers: [LoginGuard,NotLoginGuard,LoginAdminGuard],//login Guars
  bootstrap: [AppComponent]
})
export class AppModule { }

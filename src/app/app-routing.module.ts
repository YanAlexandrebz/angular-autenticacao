import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao.guard';
import { LancamentosComponent } from './componentes/lancamentos/lancamentos.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path: "", 
    component: LancamentosComponent,
    canActivate: [AutenticacaoGuard] 
  },
  {
    path: "login", 
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

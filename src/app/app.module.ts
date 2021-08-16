import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { LancamentosComponent } from './componentes/lancamentos/lancamentos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TipoPipe } from './filtros/tipo.pipe';
import { HoraPipe } from './filtros/hora.pipe';
import { DataPipe } from './filtros/data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LancamentosComponent,
    TipoPipe,
    HoraPipe,
    DataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

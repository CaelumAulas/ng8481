import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';

import { CadastroModule } from './modules/cadastro/cadastro.module';
import { LoginModule } from './modules/login/login.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CaixaDeEntradaModule,
    CadastroModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

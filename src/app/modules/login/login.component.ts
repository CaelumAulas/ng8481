import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = new FormControl('vanessa@cmail.com.br', Validators.required);
  public senha = new FormControl('123', Validators.required);

  public formLogin = new FormGroup({
    email: this.email,
    senha: this.senha
  })

  public mensagem = '';

  constructor(private loginService: LoginService
              ,private roteador: Router) { }

  ngOnInit() {}

  handleLogin(){

    if(this.formLogin.invalid) {
      this.formLogin.markAllAsTouched()
      return;
    }

    this.loginService
        .autenticar(this.formLogin.value)
        .subscribe(
          () => this.roteador.navigate(['inbox'])
          ,(erro) => this.mensagem = erro.error.message
        )

  }

}

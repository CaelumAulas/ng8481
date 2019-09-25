import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginOutput } from 'src/app/models/login-output';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = new FormControl('', Validators.required);
  public senha = new FormControl('', Validators.required);

  public formLogin = new FormGroup({
    email: this.email,
    senha: this.senha
  })

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  handleLogin(){

    const loginDto = {
      email: this.email.value,
      password: this.senha.value
    }
    console.log(this.formLogin.value);

    this.http
        .post('http://localhost:3200/login', loginDto)
        .subscribe(
          (resposta: LoginOutput) => {
            console.log('deu certo');
            localStorage.setItem('cmail-token', resposta.token)
          }
          , (erro) => {
            console.log('deu ruim');
          }
        )

  }

}

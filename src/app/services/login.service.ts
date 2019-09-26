import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { LoginInput } from '../models/dto/login-input';
import { LoginForm } from '../models/login-form';
import { map } from 'rxjs/operators';
import { LoginOutput } from '../models/login-output';
import { TokenService } from './token.service';

@Injectable()
export class LoginService {

  private url = environment.api+'login/';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  autenticar (loginData: LoginForm) {

    const loginDto: LoginInput = {
      email: loginData.email,
      password: loginData.senha
    }

    return this.http
    .post(this.url, loginDto)
    .pipe(
      map((resposta: LoginOutput) => {
        this.tokenService.gravar(resposta.token);
        return {
          avatarUrl: resposta.avatarUrl,
          email: resposta.email,
          name: resposta.name
        }
      })
    )

  }

}

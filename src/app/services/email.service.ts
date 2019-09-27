import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { EmailForm } from '../models/email-form';
import { EmailInputDTO } from '../models/dto/email-input';
import { Observable } from 'rxjs';
import { EmailOutputDTO } from '../models/dto/email-output';
import { map } from 'rxjs/operators';
import { Email } from '../models/email';

@Injectable()
export class EmailService {

  private url = environment.api+'emails';
  private httpOptions = {
    headers: new HttpHeaders(
      {'Authorization': localStorage.getItem('cmail-token')}
    )
  }

  constructor(private http: HttpClient
      , private tokenService: TokenService) {}

  enviar(email: EmailForm): Observable<EmailOutputDTO> {

    const emailDTO: EmailInputDTO = {
      to: email.destinatario,
      subject: email.assunto,
      content: email.conteudo
    }

    return this.http.post<EmailOutputDTO>(this.url,emailDTO,this.httpOptions);
  }

  listar(): Observable<Email[]> {
    return this.http
                .get<EmailOutputDTO[]>(this.url,this.httpOptions)
                .pipe(
                  map(
                    listaEmIngles => {

                        return listaEmIngles.map(
                          emailIngles => {
                            return new Email(emailIngles);
                          }
                        )

                    }
                  )
                )
  }
}

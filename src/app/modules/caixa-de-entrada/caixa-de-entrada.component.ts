import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [` ul, li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }`]
})
export class CaixaDeEntradaComponent implements OnInit {

  listaEmails: Email[] = [];

  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  private _isNewEmailOpen = false;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.listarEmails()
  }

  get isNewEmailOpen () {
    return this._isNewEmailOpen;
  }

  listarEmails () {
    this.emailService
    .listar()
    .subscribe(
      novaListaEmails => this.listaEmails = novaListaEmails
      ,erro => console.log(erro)
    )
  }

  toggleNewEmail() {
    this._isNewEmailOpen = !this.isNewEmailOpen;
  }

  handleNewEmail(formEmail: NgForm) {

    if(formEmail.invalid) {
      formEmail.control.markAllAsTouched();
      return;
    }

    this.emailService
        .enviar(this.email)
        .subscribe(
          () => {
            this.listarEmails();
            formEmail.resetForm();
          }
          ,(erro) => console.log('deu ruim', erro)
        )
  }

}

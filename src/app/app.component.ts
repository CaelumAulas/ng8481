import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaEmails = [];

  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  private _isNewEmailOpen = false;

  get isNewEmailOpen () {
    return this._isNewEmailOpen;
  }

  toggleNewEmail() {
    this._isNewEmailOpen = !this.isNewEmailOpen;
  }

  handleNewEmail(eventoSubmit: Event) {
    eventoSubmit.preventDefault();

    this.listaEmails.push({
      destinatario: this.email.destinatario,
      assunto: this.email.assunto,
      conteudo: this.email.conteudo
    })

    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }


  }

}

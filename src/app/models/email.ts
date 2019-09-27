import { EmailOutputDTO } from './dto/email-output';

export class Email {

  assunto = "";
  conteudo = "";
  dataEnvio = "";
  destinatario = "";
  id = "";
  remetente = "";

  constructor(emailIngles: EmailOutputDTO) {
    this.assunto = emailIngles.subject;
    this.conteudo = emailIngles.content;
    this.dataEnvio = emailIngles.created_at;
    this.destinatario = emailIngles.to;
    this.id = emailIngles.id;
    this.remetente = emailIngles.from;
  }

}

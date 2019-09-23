import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserInputDTO } from 'src/app/models/dto/user-input';
import { Router } from '@angular/router';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  private validadoresNome = Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(255),
    Validators.pattern('[a-zA-Z\u00C0-\u00FF ]+')
  ]);

  private validadoresUsername = Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(255),
    Validators.pattern('[a-z0-9]+')
  ]);

  private validadoresSenha = Validators.compose([
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(255)
  ]);

  private validadoresTelefone = Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(9),
    Validators.pattern(/^\d{8,9}$/)
  ]);

  public nome = new FormControl('', this.validadoresNome);
  public usuario = new FormControl('', this.validadoresUsername);
  public senha = new FormControl('', this.validadoresSenha);
  public avatar = new FormControl('', Validators.required);
  public telefone = new FormControl('', this.validadoresTelefone);

  public formCadastro = new FormGroup({
    nome: this.nome,
    username: this.usuario,
    senha: this.senha,
    avatar: this.avatar,
    telefone: this.telefone,
  });

  public mensagem = '';

  constructor(private conexaoApi: HttpClient
              ,private roteador: Router) { }

  ngOnInit() {

    //this.formCadastro.get('nome').getError('minlength')
  }

  handleCadastro() {

    if(this.formCadastro.invalid) {
      console.log('INVALIDOOO');

      return;
    }

    //data transfer object -DTO
    const userDTO = new UserInputDTO(this.formCadastro.value);

    this.conexaoApi
        .post('http://localhost:3200/users', userDTO)
        .subscribe(
          resposta => {
            console.log(resposta);
            this.mensagem = "Cadastro feito com sucesso!"
            this.formCadastro.reset();
          }
          ,(erro: HttpErrorResponse) => {
            this.mensagem = erro.error.body[0].message;
          }
          ,() => {
            setTimeout(() => {
              this.roteador.navigate(['login']);
            }, 3000);
          }
        );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formulario!: FormGroup

  minhaMensagem = { nome: '', email: '', mensagem: '' };

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      inputNome: new FormControl(this.minhaMensagem.nome, Validators.required ),
      inputEmail: new FormControl(this.minhaMensagem.email, [ Validators.required, Validators.email] ),
      inputMensagem: new FormControl(this.minhaMensagem.mensagem, [ Validators.required, Validators.minLength(5)] )
    })
  }

  public enviarMensagem(): void {
    console.log(this.formulario)
  }

  get nome() { return this.formulario.get('inputNome')!; }

  get email() { return this.formulario.get('inputEmail')!; }

  get mensagem() { return this.formulario.get('inputMensagem')!; }

}

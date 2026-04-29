import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pessoa-login.component.html',
  styleUrl: './pessoa-login.component.css'
})
export class PessoaLoginComponent {
  constructor (private router: Router){}
  onBotaoClicado() {
    if(this.login=="marcos.mestre@gmail.com" 
      && this.senha=="tricolor"){
      alert("Login efetuado com sucesso!!!");
      this.router.navigate(['pessoas']);

    }
    else{
      alert("Usuário ou senha inválidos!!!");
    }
  }
  login: any;
  senha: any;
  botaoDesabilitado: any;
}


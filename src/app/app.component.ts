import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, 
    FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  /*
  template: 
  `
    Nome: <input type="text" (keyup)="exibirConsole($event)"/>
  `,*/
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*
  exibirConsole(event: KeyboardEvent): void {
    console.log(`Você pressionou: ${event.key}`);
  }*/
  titulo = 'Bem-vindo ao mundo Angular';
  nome = "Marcos ";
  sobrenome = "Monteiro";
  cidade = "São Paulo";
 textoBotao: string = 'Clique aqui!';
 botaoDesabilitado: boolean = false;

 mensagem: string = "";
 onBotaoClicado(){
  this.mensagem = "Você clicou no Botão";
 }
 atualizarMensagem(valor: string): void {
  this.mensagem = valor;
}
onKeyUp(event: Event) {
  const input = event.target as HTMLInputElement;
  this.mensagem = `Olá ${input.value} !`;
}
}

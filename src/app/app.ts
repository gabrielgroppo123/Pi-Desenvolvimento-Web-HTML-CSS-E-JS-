import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  updateField(event: KeyboardEvent): void{
    console.log(`Usuario pressionou: ${event.key}`)
  }
  titulo = 'Titulo';
  nome = "Nome";
  sobrenome = "Sobrenome";
  cidade = "Sao Paulo"
  textoBotao: string = 'Clique aqui!';
  botaoDesabilitado: boolean = false
  mensagem: string ='';
  onBotaoClicado(){
    this.mensagem = 'Voce clicou no botão!';
  }
  onKeyUp(event: Event){
    const input = event.target as HTMLInputElement;
    this.mensagem = `Olá ${input.value}`
  }
}
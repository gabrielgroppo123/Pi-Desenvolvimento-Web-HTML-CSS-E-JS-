import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Pessoa } from '../../core/types/types';
import { PessoaService } from '../../core/services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
 selector: 'app-pessoa-form',
 imports: [FormsModule],
 standalone: true,
 templateUrl: './pessoa-form.component.html',
 styleUrl: './pessoa-form.component.css',
})
export class PessoaFormComponent {
 titulo = 'Cadastro de Pessoas';
 botaoCadastro = "Cadastrar";
 pessoaId?: number;
 //Defino um objeto pessoa que será incluído ou alterado.
 pessoa: Pessoa = {} as Pessoa;
 constructor(
  private service: PessoaService,
  private router: Router,
  private route: ActivatedRoute
 ) {
  //Verifico se é alteração ou inclusão
  this.pessoaId = Number(this.route.snapshot.params['id']);
  if (this.pessoaId) {//ALTERAÇÃO
    this.titulo = "Alteração de Pessoas";
    this.botaoCadastro = "Alterar";
   service.buscarPorId(this.pessoaId).subscribe((pessoa) => {
    if (pessoa) {//INCLUSÃO
     this.pessoa.id = Number(pessoa.id);
     this.pessoa.nome = pessoa.nome;
     this.pessoa.sobrenome = pessoa.sobrenome;
     this.pessoa.dtNascimento = pessoa.dtNascimento;
    }
   });
  }
 }
 submeter() {
  if (this.pessoaId) {  //ALTERAR  
   this.service.editar(this.pessoa).subscribe(() => {
    this.router.navigate(['/pessoas']);    
   });
  } else { //INCLUIR
   this.service.incluir(this.pessoa).subscribe(() => {
    this.router.navigate(['/pessoas']);
   });
  }
 }
 cancelar() {
  this.router.navigate(['/pessoas']);
 }
}

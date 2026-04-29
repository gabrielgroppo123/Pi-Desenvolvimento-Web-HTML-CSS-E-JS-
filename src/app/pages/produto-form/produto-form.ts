import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-produto-form',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.css',
})
export class ProdutoForm {
  formulario = new FormGroup({
    nome: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
    descricao: new FormControl('',
      [Validators.required, Validators.minLength(10), Validators.maxLength(200)]
    )
  })
  onSubmit(){
    if(this.formulario.valid){
      alert('Fomulario enviado com sucesso \n' + JSON.stringify(this.formulario.value));
    }
  }
}

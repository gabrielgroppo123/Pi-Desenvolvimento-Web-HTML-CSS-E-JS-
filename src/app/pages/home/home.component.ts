import { Component } from '@angular/core';
import { CardItemComponent } from "../../shared/card-item/card-item.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}
  titulo = "Bem-vindos";
  listarPessoas(){
    this.router.navigate(['pessoas']);
  }
}

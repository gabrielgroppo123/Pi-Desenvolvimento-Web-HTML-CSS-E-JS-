import { Component, Input } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css',
})
export class CardItemComponent {
  @Input() imageUrl: string = '';
}

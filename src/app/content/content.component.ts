import { Component } from '@angular/core';
// Importando módulos do Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}

import { Component } from '@angular/core';
// Importando módulos do Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-content',
  
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule
    
  ],
  templateUrl: './content.component.html', 
  styleUrl: './content.component.scss',
  
})
export class ContentComponent {
 
}
export class ProgressBarBufferExample {

 
}
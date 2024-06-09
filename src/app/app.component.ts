import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// IMPORTS
import { ContentComponent } from './content/content.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContentComponent
   
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing_page_churascaria';
  
}

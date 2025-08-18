import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footerjullia } from './components/footerjullia/footerjullia';
import { Homejullia } from './components/homejullia/homejullia';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footerjullia, Homejullia],
  templateUrl: './app.html',
  styleUrl: './app.css',
  //template:`
  //  <h1> Biirl </h1>
  //  `
    
})
export class App {
  protected readonly title = signal('Teste');
}

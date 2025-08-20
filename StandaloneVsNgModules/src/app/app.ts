import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carne } from './components/carne/carne';
import { CarneModule } from './components/carne/carne.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarneModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Testando');
}

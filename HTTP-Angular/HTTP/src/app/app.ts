import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Caneta } from './components/caneta/caneta';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Caneta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HTTP');
}

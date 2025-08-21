import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GatoModule } from './components/gato/gato.module';
import { Mala } from './components/mala/mala';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GatoModule, Mala],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AprendendoSobreEffects');
}

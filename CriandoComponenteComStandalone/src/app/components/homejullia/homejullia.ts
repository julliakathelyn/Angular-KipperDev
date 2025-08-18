import { Component } from '@angular/core';
import { Footerjullia } from '../footerjullia/footerjullia';
import { Neon } from '../neon/neon';
import { Ju } from '../ju/ju';

@Component({
  selector: 'app-homejullia',
  standalone: true,
  imports: [Footerjullia, Neon, Ju],
  templateUrl: './homejullia.html',
  styleUrl: './homejullia.css'
})
export class Homejullia {

}

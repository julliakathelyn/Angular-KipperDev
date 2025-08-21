import { Component } from '@angular/core';

@Component({
  selector: 'app-mala',
  standalone:true,
  imports: [],
  templateUrl: './mala.html',
  styleUrl: './mala.css'
})
export class Mala {

  value = false
  count = 0
  numero = 2

  lista = ["Jullia", "Neon", "Karina"]
}
 
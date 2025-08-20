import { Component } from '@angular/core';

@Component({
  selector: 'app-carne',
  standalone:false,
  templateUrl: './carne.html',
  styleUrl: './carne.css'
})
export class Carne {
  name = "Bolacha"
  
  UrlBolacha = "https://drogal.vtexassets.com/arquivos/ids/196526/60917.jpg?v=638394760285100000"

  teste(){
    alert("uhuu")
  }
}

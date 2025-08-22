import { Component } from '@angular/core';
import { HelloWord } from '../../services/hello-word';

@Component({
  selector: 'app-caneta',
  standalone:true,
  imports: [],
  templateUrl: './caneta.html',
  styleUrl: './caneta.css'
})
export class Caneta {

  constructor(private service: HelloWord){
    this.service.getHelloWord().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.error('Erro ao obter fatos sobre gatos:', error);
      })
  }

}

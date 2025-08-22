import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWord {
  private apiUrl = "https://static.nagem.com.br/util/artefatos/produtos/m/n/592611616503618/067164_1.jpg";

  constructor(private client: HttpClient) {}

  getHelloWord(): Observable<any>{
   return this.client.get(this.apiUrl)
  }
  
}

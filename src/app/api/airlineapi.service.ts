import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirlineapiService {
  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {
  }

  getConsulta(){
    return this.http.get(this.url);
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  constructor(private http: HttpClient
  ) {}

getUsers() {
	return this.http.get('http://sing.com.co/colina/api/alumnos/view/1?apiKey=9tMS1A8G5QY4N84');
} 

}

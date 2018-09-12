import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

	apiUrl = 'https://jsonplaceholder.typicode.com';
	apiUrl2 = 'http://sing.com.co/colina/api/alumnos/view/1?apiKey=9tMS1A8G5QY4N84';

	constructor(private http: HttpClient) {
		console.log('Hello RestServiceProvider Provider');
	}

	getUsers() {
	  return new Promise(resolve => {
	    this.http.get(this.apiUrl+'/users').subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}

	getAlumno() {
	  return new Promise(resolve => {
	    this.http.get(this.apiUrl2).subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
}

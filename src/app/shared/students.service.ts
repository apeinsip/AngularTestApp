import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StudentsService {

  constructor(private http: Http) { }

  getAllStudents() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json());
  }

  getOneStudent(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id)
      .map(res => res.json());
  }

}

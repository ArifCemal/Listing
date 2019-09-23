import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // tslint:disable-next-line:max-line-length
  constructor(private httpClient: HttpClient) {
  }

  getStudentList() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/');
  }
  getStudentDetail(id) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/' + id );
  }
}

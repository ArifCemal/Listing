import { Component } from '@angular/core';
import {StudentService} from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent {
  private students = [];
  private detail = [];
  isDetail = false;

  constructor(private studentService: StudentService) {
    this.getStudentList();
  }
  getStudentList() {
    this.isDetail = false;
    this.studentService.getStudentList().subscribe((res: Response) => {
      this.students.push(res);
    });
  }

  getStudentDetail(id) {
    this.isDetail = true;
    const temp = [];
    this.studentService.getStudentDetail(id).subscribe((res: Response) => {
      temp.push(res);
      this.detail.push(temp[0]);
    });
  }
}

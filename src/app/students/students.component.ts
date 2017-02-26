import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'my-app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any = [];
  result: any = [];
  id: '';

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getAllStudents().subscribe(students => {
      this.students = students;
    });
  }

  findStudent(id) {
    this.studentsService.getOneStudent(id).subscribe(student => {
      this.result = student;
    }, error => {
      this.result = error;
    });
  }

}

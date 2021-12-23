import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { User } from 'src/app/models/user';
import { ServerService } from 'src/app/services/serverCourse.service';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.scss']
})
export class CourseHomeComponent implements OnInit {

  courses: Course[] = [];
  @Input() currentCourse !: string;

  constructor(
    private serverCourses: ServerService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.getCourses();

  }

  getCourses() {
    this.serverCourses.getAll().toPromise().then(resp => {
      for (let i = 0; i < 5; i++) {

      this.courses.push(resp[i]);
      }
    });
  }

  redirectCourse() {
    this.router.navigate(['/courses'])
  }
  
}

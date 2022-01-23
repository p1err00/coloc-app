import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CourseCourante } from 'src/app/models/courseCourante';
import { ServerService } from 'src/app/services/serverCourse.service';
import { SharedCourseService } from 'src/app/services/sharedCourse/shared-course.service';

@Component({
  selector: 'app-course-aside',
  templateUrl: './course-aside.component.html',
  styleUrls: ['./course-aside.component.scss']
})
export class CourseAsideComponent implements OnInit {

  //Show or not
  showHistorique: boolean = false;
  showDernierAjout: boolean = false;
  showPlusAJoute: boolean = false;

  courses: Course[] = [];
  lastBuy: Course[] = [];
  moreBuy: Course[] = [];

  constructor(
    private server: ServerService,
    private sharedCourse : SharedCourseService
  ) { }

  ngOnInit(): void {
    this.getCourses();
    this.getMoreBuy();
    this.getLastBuy();
  }


  private getCourses(): Observable<Course[]> {
    this.server.getAll().subscribe(resp => {
      this.courses = resp;
    });
    return this.server.getAll();
  }

  //get and display item more_buy to 'more_buy'
  getMoreBuy() {
    this.server.getAll().subscribe(resp => {

      for (let i = 0; i < 6; i++) {
        if (resp[i].nb_buy_cou != 0) {
          this.moreBuy.push(resp[i]);
        }
        this.lastBuy.sort((a, b) => (a.nb_buy_cou > b.nb_buy_cou) ? 1 : -1);
      }
    });
  }

  //Get and display item last_buy to 'last_buy'
  getLastBuy() {
    this.server.getAll().subscribe(resp => {

      for (let i = 0; i < 6; i++) {
        this.lastBuy.push(resp[i]);
      }
      //If a > b, a v down : else a ^ up
      this.lastBuy.sort((a, b) => (a.last_buy_cou > b.last_buy_cou) ? -1 : 1);

    });
  }

  showHistoriqueF() {
    this.showHistorique = !this.showHistorique;
    console.log(this.showHistorique);
  }

  addToList(item : Course){
    let course : CourseCourante= {
      id : 0,
      nom_cur_cou : item.nom_cou,
      nb_buy_cur_cou : item.nb_buy_cou,
      last_buy_cur_cou : item.last_buy_cou,
      prix_cur_cou : item.prix_cou,
      done : false,
      id_coloc : item.id_coloc
    }
    this.sharedCourse.emitChange(course);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from '../../../services/serverCourse.service';
import { CoursesCurrentService } from '../../../services/courses-current.service';
import { Observable } from 'rxjs';

import { Course } from '../../../models/course';
import { CourseCourante } from '../../../models/courseCourante';
import { ModalAddCourseComponent } from '../../../shared/modals/modal-add-course/modal-add-course.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../models/user';
import { Colocation } from '../../../models/colocation';

import jwt_decode from 'jwt-decode';
import { AuthService } from '../../../services/auth.service';
import { ColocationService } from '../../../services/colocation.service';
import { AlertService } from '../../../services/alert.service';
import { NotificationService } from '../../../services/notification.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  currentUser !: User;
  currentUserCourse : string = '';

  
  currentCourses: CourseCourante[] = [];
  users : User[] = [];

  

  constructor(
    private serverCurrent: CoursesCurrentService,
    private modalService: NgbModal,
    private authService: AuthService,
    private serverColoc : ColocationService,
    private alertService : AlertService,
    private notifService : NotificationService
  ) {
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;

    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
      console.log(this.currentUser);
    });
  }

  ngOnInit(): void {

    this.getCurrentCourses();
    this.getUsers();
  }

  private getCurrentCourses() {
    this.serverCurrent.getAll().subscribe(resp => {
      for(let res of resp ){
        if(res.done == false)
          this.currentCourses.push(res);
      }
    })
  }

  

  getUsers(){
    this.authService.getAll().subscribe( resp => {
      let coloc = this.currentUser.id_coloc;

      for(let res of resp){
        if(res.id_coloc === coloc){
          this.users.push(res);

        }
      }
    });
  }

  //Add item from input to courses list
  addItemToCourseList(item: any) {
    
    //Create object CurrentCourse
    let currentCourse = {
      id: 0,
      nom_cur_cou: item.value,
      nb_buy_cur_cou: 0,
      last_buy_cur_cou: new Date(),
      prix_cur_cou: 0,
      id_coloc: this.currentUser.id_coloc,
      done : false
    }
    //Create object Course
    let course = {
      id_cou: 0,
      nom_cou: item.value,
      nb_buy_cou: 0,
      last_buy_cou: new Date(),
      prix_cou: 0,
      id_coloc: this.currentUser.id_coloc
    }

    this.serverCurrent.create(currentCourse);
    this.currentCourses.push(currentCourse);

    this.alertService.showSuccess('Succès', 'Course ajoutée à la liste');
  }

  //Add item from 'last_buy' and 'more_buy' to courses list
  addToList(item: Course) {
    let already: boolean;
    already = this.alreadyInCoursesList(item.nom_cou);

    let current = {
      id: item.id_cou,
      nom_cur_cou: item.nom_cou,
      nb_buy_cur_cou: item.nb_buy_cou,
      last_buy_cur_cou: item.last_buy_cou,
      prix_cur_cou: item.prix_cou,
      id_coloc: this.currentUser.id_coloc,
      done : false
    }

    if (already == true) {

      this.alertService.showWarning('Attention', 'Deja dans la liste de course')

    } else {
      item.nb_buy_cou++;
      this.currentCourses.push(current);
      this.serverCurrent.create(current);
    this.alertService.showSuccess('Succès', 'Course ajoutée à la liste');
    }
  }

  //Test to know if item is already in courses list
  alreadyInCoursesList(item: string): boolean {
    let already = false;

    for (let course of this.currentCourses) {

      if (item == course.nom_cur_cou) {
        already = true;
        return already;
      }
    }
    return already;
  }


  //Delete item to ourses list
  deleteItemCoursesList(item: any) {
    this.serverCurrent.delete(item.id);
    console.log(this.currentCourses.indexOf(item));
    this.currentCourses.splice(this.currentCourses.indexOf(item), 1);
    this.alertService.showSuccess('Succès', 'Course supprimé de la liste');
  }


  //Open modal add
  openModalAdd() {
    const modalRef = this.modalService.open(ModalAddCourseComponent, {
      windowClass: 'modalStock'
    });

    modalRef.componentInstance.event.subscribe((item: any) => {
      console.log(item);

      let course = {
        id_cou: 0,
        nom_cou: item.nom,
        nb_buy_cou: 0,
        last_buy_cou: new Date(),
        prix_cou: item.prix,
        id_coloc: this.currentUser.id_coloc
      }

      let current = {
        id: 0,
        nom_cur_cou: item.nom,
        nb_buy_cur_cou: 0,
        last_buy_cur_cou: new Date(),
        prix_cur_cou: item.prix,
        id_coloc: this.currentUser.id_coloc,
        done : false
      }

      let already : Boolean = true;
      already = this.alreadyInCoursesList(current.nom_cur_cou);

      if(already == false){

      this.currentCourses.push(current);
      this.serverCurrent.create(current);

      this.alertService.showSuccess('Succès', 'Course ajoutée à la liste');
      } else {
        this.alertService.showWarning('Attention', 'Course deja dans la liste');
      }
    });
  }

  //Show or note
  


  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

  selectChange( event : any){
    this.currentUserCourse = event.target.value;
  }

  changeUserCourse(){
    
    if(this.currentUserCourse == ''){
      this.alertService.showError('Erreur', 'Pas d\'utilisateur selectionné');
      return;
    }    
    this.serverColoc.getById(this.currentUser.id_coloc).subscribe( resp => {
      let coloc = {
        id_coloc : resp.id_coloc,
        nom_coloc : resp.nom_coloc,
        nb_personnes_coloc : resp.nb_personnes_coloc,
        date_creation_coloc : resp.date_creation_coloc,
        loyer_coloc : resp.loyer_coloc,
        user_course : this.currentUserCourse
      } 
      this.alertService.showSuccess('Succès', 'Utilisateur a ete selectionné(e)');
      this.serverColoc.update(this.currentUser.id_coloc, coloc);

      for(let user of this.users){
        if(user.username_user == this.currentUserCourse){
          this.authService.getUserProfile(user.id_user).subscribe( resp => {
            this.notifService.postAssignToCourse(this.currentUser.id_coloc, resp.id_user);
          });
        }
        this.notifService.postAssignToCourseAll(this.currentUser.username_user, this.currentUser.id_coloc, this.currentUserCourse,this.currentUser.id_user, user.id_user);
      }
    });
  }

  doneCourse(){
    for(let course of this.currentCourses){
      course.done = true;
      this.serverCurrent.update(course.id, course);
    }
    this.currentCourses = [];
    this.alertService.showSuccess('Succès', 'La liste a été vidée');
  }
}
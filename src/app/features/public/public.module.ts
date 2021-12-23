import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepensesHomeComponent } from './home/depenses/depenses.component';
import { EventHomeComponent } from './home/event-home/event-home.component';
import { StockHomeComponent } from './home/stock-home/stock-home.component';
import { CourseHomeComponent } from './home/course-home/course-home.component';
import { HomeComponent } from './home/home.component';
import { TachesHomeComponent } from './home/taches-home/taches-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DepensesHomeComponent,
    EventHomeComponent,
    StockHomeComponent,
    CourseHomeComponent,
    HomeComponent,
    TachesHomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule
  ]
})
export class PublicModule { }

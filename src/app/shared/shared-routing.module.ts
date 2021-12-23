import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAsideComponent } from './aside/home-aside/home-aside.component';

const routes: Routes = [
    {path: 'home', component: HomeAsideComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule { }
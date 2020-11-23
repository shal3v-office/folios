import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorPageComponent } from './server-error-page/server-error-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ProjectsListComponent} from './projects-list/projects-list.component'
import {AddProjectComponent} from './add-project/add-project.component'

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'server-error-page', component: ServerErrorPageComponent },
  { path: 'project-list', component: ProjectsListComponent},
  { path: 'add-project', component: AddProjectComponent},
  { path: '', component: HomePageComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import Backendless from 'backendless';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServerErrorPageComponent } from './server-error-page/server-error-page.component';
import { ApplicationComponent } from './application/application.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';

Backendless.initApp(environment.backendless.APP_ID, environment.backendless.API_KEY);

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SignUpComponent,
    LoginComponent,
    HeaderComponent,
    NotFoundComponent,
    HomePageComponent,
    ServerErrorPageComponent,
    ApplicationComponent,
    ProjectsListComponent,
    ProjectComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../classes/project';
import { ProjectsService } from '../services/projects.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  newProject:Project;
  constructor(private projectsService: ProjectsService,public usersService: UsersService,private router: Router) {
    this.newProject=new Project();
  }

  ngOnInit(): void {
    if(!this.usersService.hasLoginUser){
      this.router.navigate(['/sign-up']);
    }
  }
  addProject(){
    this.projectsService.add(this.newProject).then(()=>{
      this.newProject=new Project();
    })
  }

}

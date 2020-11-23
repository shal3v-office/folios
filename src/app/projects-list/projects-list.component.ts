import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Project} from '../classes/project'
import { ProjectsService } from '../services/projects.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projectsList:Project[]
  constructor(private usersService: UsersService,private router: Router,private projectsService: ProjectsService) {

  }

  ngOnInit(): void {
    this.projectsService.loadAll().then(()=>{
      this.projectsList=this.projectsService.projectsList
    });
  }
  addProject(){
    if(this.usersService.hasLoginUser){
      this.router.navigate(['/add-project']);
    }
    else{
      alert("only logined user can add project, please login and continue");
    }
    
  }

}

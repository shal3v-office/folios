import { Injectable } from '@angular/core';
import { Project } from '../classes/project';

const ProjectsStore = Backendless.Data.of('Projects');

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projectsList: Project[] = [];
  constructor() { }
  loadAll() {
    return ProjectsStore.find().then((projects: Project[]) => {
      this.projectsList = projects;
    });
   
  }
  add(newProject: Project) {
    return ProjectsStore.save<Project>(newProject).then((savedProject: Project) => {
      this.projectsList.push(savedProject);
    })
    .catch(error => alert('Can not add project: '+ error.message));
  }
}

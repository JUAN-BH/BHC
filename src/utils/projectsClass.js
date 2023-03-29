export class Project {
  constructor({ name, imgProject, description, skills = [], links = {} } = {}) {
    this.name = name;
    this.imgProject = imgProject;
    this.description = description;
    this.skills = skills;
    this.links = links;
  }
}

import { Component, HostBinding } from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  article = new Article(title.value, link.value, 0);
  this.articles.push(article);
  title.value = "";
  link.value = "";
  return false;
}

  articles : Article[];


  constructor() { this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
];

return false; }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //This selector use in anywhere in a project
  //template: `<h1>Hello Angular</h1>`, //In this section we we write HTML code for display
  //template: `<prod-list></prod-list>`, //prod-list is a selector of product-list.component.
  templateUrl: './app.component.html', //Here we include html file from this component.
  styleUrls: ['./app.component.css']  //Here we use multiple CSS files.
})
export class AppComponent {
  title = 'cromaApp';
  hitBody: number = 500;
}

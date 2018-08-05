import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  widImg:number=150;
  hitImg:number=40;
  margImg:number=0;
  logo:string = 'LOGO';
}
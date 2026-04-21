import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title: string = 'Angular + Node.js deploy on Docker'
  protected routerLinks: { label: string, route: string } [] = [
    {label: 'Home', route: ''},
    {label: 'Books Table', route: 'table'},
    {label: 'Books Form', route: ''},
  ]
}

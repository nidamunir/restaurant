import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavItems } from './components/NavItems/nav-items';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavItems],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello world';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from './components/HeroSection/hero-section'; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSection],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Hello world';
}

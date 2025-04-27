import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from './components/HeroSection/hero-section'; 
import { Features } from './components/Features/features';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSection, Features],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Hello world';
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Carousel } from './components/carousel/carousel';
import { DoctorsSpecialty } from './components/doctors-specialty/doctors-specialty';
import { Registration } from './components/registration/registration';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Navbar, Carousel, DoctorsSpecialty, Registration, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('piedrazul-angular');
}

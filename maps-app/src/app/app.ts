import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Nabvar} from './shared/components/nabvar/nabvar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nabvar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('maps-app');
}

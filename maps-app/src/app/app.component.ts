import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Nabvar} from './shared/components/nabvar/nabvar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Nabvar], // Aquí ya no hay [...] sino código real
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maps-app';
}

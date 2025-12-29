import { Component } from '@angular/core';
import {routes} from '../../../app.routes';

@Component({
  selector: 'app-nabvar',
  imports: [],
  templateUrl: './nabvar.html',
})
export class Nabvar {
    routes=routes.map(route =>({
      path: route.path,
      title:` ${route.title ?? 'Maps in Angular'}`,
    }));
}

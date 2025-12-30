import {Component, viewChild} from '@angular/core';

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [

  ],
  templateUrl: './fullscreen-map-page.html',
  styles:`
    div{
      width: 100vw;
      height: calc(100vh - 64px);
    }
  `
})
export class FullscreenMapPage {
  divElement= viewChild('map');
}

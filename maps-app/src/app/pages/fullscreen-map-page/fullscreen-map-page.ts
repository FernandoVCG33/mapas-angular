import { Component, ElementRef, AfterViewInit, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-fullscreen-map-page',
  standalone: true, // Añadido para que sea un componente standalone
  templateUrl: './fullscreen-map-page.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }
  `
})
export class FullscreenMapPage implements AfterViewInit {

  // Corregido el nombre de la propiedad
  mapDiv = viewChild<ElementRef>('map');

  ngAfterViewInit(): void {
    if (!this.mapDiv()?.nativeElement) throw 'Elemento #map no encontrado';

    const mapElement = this.mapDiv()!.nativeElement;

    if (!mapElement) throw 'Elemento nativo #map no encontrado';

    const map = new mapboxgl.Map({
      container: mapElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}

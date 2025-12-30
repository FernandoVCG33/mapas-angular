import {AfterViewInit, Component, ElementRef, signal, viewChild} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;


@Component({
  selector: 'app-marker-page',
  imports: [],
  templateUrl: './marker-page.html',
})
export class MarkerPage implements AfterViewInit{
  map=signal<mapboxgl.Map|null>(null);
  // Corregido el nombre de la propiedad
  mapDiv = viewChild<ElementRef>('map');

  async ngAfterViewInit(){
    if (!this.mapDiv()?.nativeElement) throw 'Elemento #map no encontrado';

    const mapElement = this.mapDiv()!.nativeElement;

    if (!mapElement) throw 'Elemento nativo #map no encontrado';

    const map = new mapboxgl.Map({
      container: mapElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-68.151751,-16.521333], // starting position [lng, lat]
      zoom: 15, // starting zoom
    });
    this.mapListener(map);
  }
  mapListener(map:mapboxgl.Map){
    console.log('object');
  }
}

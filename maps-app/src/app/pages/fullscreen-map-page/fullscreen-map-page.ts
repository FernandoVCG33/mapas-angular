import {Component, ElementRef, AfterViewInit, viewChild, signal, effect} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import {DecimalPipe, JsonPipe} from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-fullscreen-map-page',
  standalone: true, // Añadido para que sea un componente standalone
  templateUrl: './fullscreen-map-page.html',
  imports:[
    DecimalPipe, JsonPipe
  ],
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }
    #controls{
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      border: 1px solid #e2e8f0;
      width: 250px;
    }
  `
})
export class FullscreenMapPage implements AfterViewInit {
  map=signal<mapboxgl.Map|null>(null);
  // Corregido el nombre de la propiedad
  mapDiv = viewChild<ElementRef>('map');

  zoomEfect=effect(()=>{
    if(!this.map()) return;
    this.map()?.zoomTo(this.zoom());
  })

  zoom=signal(14);

  coordinates=signal({
    lng:-74.5,
    lat:40
  });

  ngAfterViewInit(): void {
    if (!this.mapDiv()?.nativeElement) throw 'Elemento #map no encontrado';

    const mapElement = this.mapDiv()!.nativeElement;

    if (!mapElement) throw 'Elemento nativo #map no encontrado';

    const {lat,lng}=this.coordinates();
    const map = new mapboxgl.Map({
      container: mapElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [lat, lng], // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
    });
    this.mapListener(map);
  }
  mapListener(map:mapboxgl.Map){
    map.on('zoomend', (event)=>{
      const newZoom= event.target.getZoom();
      this.zoom.set(newZoom);
    });
    map.on('moveend',(event)=>{
      const center=map.getCenter();
      this.coordinates.set(center);
    });
    this.map.set(map);
  }
}

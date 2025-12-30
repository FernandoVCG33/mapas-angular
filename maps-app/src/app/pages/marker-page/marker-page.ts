import {AfterViewInit, Component, ElementRef, signal, viewChild} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

interface Marker{
  id: string;
  mapboxMarker: mapboxgl.Marker;
}

@Component({
  selector: 'app-marker-page',
  imports: [],
  templateUrl: './marker-page.html',
})
export class MarkerPage implements AfterViewInit{
  map=signal<mapboxgl.Map|null>(null);
  // Corregido el nombre de la propiedad
  mapDiv = viewChild<ElementRef>('map');

  markers=signal<Marker[]>([]);
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

    console.log( 'object');

    map.on('click', (e)=> this.mapClick(e)  );
    this.map.set(map);
  }
  mapClick(event:mapboxgl.MapMouseEvent){
    if(!this.map()) return;
    const color= '#xxxxxx'.
    replace(/x/g, (y)=>(Math.random()*16|0).toString(16));
    const marker = new mapboxgl.Marker({
      draggable: false,
      color: color,
    })
      .setLngLat([event.lngLat.lng, event.lngLat.lat ])
      .addTo(this.map()!);
    console.log(event.lngLat);
    const newMarker:Marker={
      id:'1',
      mapboxMarker: marker,
    }
    this.markers.set([newMarker, ...this.markers()]);
  }
}

import {AfterViewInit, Component, ElementRef, input, signal, viewChild} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {environment} from '../../../../environments/environment';
mapboxgl.accessToken = environment.mapboxKey;
@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.html',
  styles:`
    div{
      width: 100%;
      height: 260px;
    }
  `
})
export class MiniMap implements  AfterViewInit{

  mapDiv = viewChild<ElementRef>('map');
  lngLat=input.required<{lng: number, lat:number}>()
  ngAfterViewInit() {
    if (!this.mapDiv()?.nativeElement) throw 'Elemento #map no encontrado';

    const mapElement = this.mapDiv()!.nativeElement;


        const map = new mapboxgl.Map({
      container: mapElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat(),
      zoom: 15, // starting zoom
    });
    new mapboxgl.Marker().setLngLat(this.lngLat()).addTo(map);
  }


}

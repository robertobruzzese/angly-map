import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MapserviceService {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  zoom = 12;
  lat: number = 41.9127761;
  lng: number = 12.5642717;
  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  buildMap(){
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}

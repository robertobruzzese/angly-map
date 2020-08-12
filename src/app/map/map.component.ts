import {Component, Input, OnInit} from '@angular/core';
import { MapserviceService } from '../mapservice.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  constructor(private mapService: MapserviceService) { }

  ngOnInit(): void {
    this.mapService.buildMap();
  }

}

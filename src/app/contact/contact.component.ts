import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  /* Variables */
  contact: any;
  lat: number = 41.9127761;
  lng: number = 12.5642717;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  zoom = 12;

  constructor( private pageTitleService: PageTitleService, private service: ChkService ) {

    /* Page title */
    this.pageTitleService.setTitle(' Lets Get In Touch ');

    /* Page subTitle */
    this.pageTitleService.setSubTitle(' Our latest news and learning articles. ');

    this.service.getContactContent().
    subscribe(response => {this.contact = response },
                err      => console.log(err),
                ()       => this.contact
    );
  }

  ngOnInit() {

  }


}

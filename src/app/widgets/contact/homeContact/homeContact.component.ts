/*
 * Home contact
 * Used in another component.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: '[angly-homeContact]',
  templateUrl: './homeContact.component.html',
  styleUrls: ['./homeContact.component.scss']
})
export class HomeContactComponent implements OnInit {


   @Input() contact : any;
   lat: number = 41.9127761;
   lng: number = 12.5642717;

   constructor() {
   }

   ngOnInit() {
   }



}

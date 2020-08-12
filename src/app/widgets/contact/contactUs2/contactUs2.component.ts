import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'angly-contactUs2',
  templateUrl: './contactUs2.component.html',
  styleUrls: ['./contactUs2.component.scss']
})
export class ContactUs2Component implements OnInit {


	@Input() contact : any;
	lat: number = 41.9127761;
	lng: number = 12.5642717;

	constructor() {

  }

	ngOnInit() {

	}


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apod-page',
  templateUrl: './apod.page.html',
  styleUrls: ['./apod.page.scss'],
})
export class ApodPage implements OnInit {
  public name: string = "Apod";

  constructor() { }

  ngOnInit() {

  }

}

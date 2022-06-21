import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input()
  public map: Object = {};

  @Input()
  public geo: Object = {};

  constructor() { }

  ngOnInit() {
  }

}

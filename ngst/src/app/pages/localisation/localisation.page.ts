import { Component, OnInit, Output } from '@angular/core';
import { MapService } from 'src/app/services/localisation/map.service';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.page.html',
  styleUrls: ['./localisation.page.scss'],
})
export class LocalisationPage implements OnInit {

  public name: string = "Localisation";

  @Output()
  public mapLocalisation = {};

  @Output()
  public geoError = {};

  constructor(private _map : MapService) { }

  ngOnInit() {
    this._map.getPositionByGeolocation()
    .then( async r => {
      const lon = r.coords.longitude;
      const lat = r.coords.latitude;
      console.log(lon);
      console.log(lat);

      await this._map.getCoordinateByLocalisation(lat.toString(),lon.toString())
        .subscribe( coords => {
          this.mapLocalisation = coords;
          console.log(coords);
        });
    })
    .catch(error => this.geoError = error);
  }

}

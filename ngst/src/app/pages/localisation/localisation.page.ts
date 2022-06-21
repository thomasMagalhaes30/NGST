import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MapService } from 'src/app/services/localisation/map.service';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from '@env/environment';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.page.html',
  styleUrls: ['./localisation.page.scss'],
})
export class LocalisationPage implements OnInit, OnDestroy {

  public name: string = "Localisation";

  @Output()
  public mapLocalisation = {};

  @Output()
  public geoError = {};

  private subscribtion: Subscription;

  constructor(private _map : MapService) { }

  ngOnInit() {
    this._map.getPositionByGeolocation()
    .then( async r => {
      const lon = r.coords.longitude;
      const lat = r.coords.latitude;
      this.subscribtion = await this._map.getCoordinateByLocalisation(lat.toString(),lon.toString())
        .subscribe( coords => {
          this.mapLocalisation = coords;
        });
      
      const mapRef = document.getElementById('map');

      await GoogleMap.create({
        id: 'my-map', // Unique identifier for this map instance
        element: mapRef, // reference to the capacitor-google-map element
        apiKey: environment.mapApiKey, // Your Google Maps API Key
        config: {
          center: {
            // The initial position to be rendered by the map
            lat: lat,
            lng: lon,
          },
          zoom: 8, // The initial zoom level to be rendered by the map
        },
      });
    })
    .catch(error => this.geoError = error);
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}

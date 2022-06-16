import { Injectable } from '@angular/core';
import {ICoordinate} from "../../@entities/coordinate";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Geolocation} from "@ionic-native/geolocation/ngx";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private static defaultCoordinate: ICoordinate = {
    "latitude": "0",
    "longitude": "0",
    "timezone_id": "",
    "offset": 0,
    "country_code": "",
    "map_url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  };

  constructor(private _httpClient : HttpClient) { } //}, private _geolocation: Geolocation) { }

  public getCoordinateByLocalisation(latitude : String, longitude : String) : Observable<ICoordinate> {
    let params = new HttpParams();

    // en cas d'erreur on retourne un coordinate par défaut
    return this._httpClient.get<ICoordinate>(`https://api.wheretheiss.at/v1/coordinates/${latitude},${longitude}`, {params})
      .pipe(
        catchError(error => {
          let defaultCoordinate = { ...MapService.defaultCoordinate };
          if (error instanceof HttpErrorResponse){
            defaultCoordinate.map_url = `Une erreur ${error.status} est survenu (${error.error})`
          }
          return of(defaultCoordinate);
        })
      );
  }
}

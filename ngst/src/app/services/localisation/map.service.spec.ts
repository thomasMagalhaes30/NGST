import { TestBed } from '@angular/core/testing';

import { MapService } from './map.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Coordinates} from "@ionic-native/geolocation";
import {environment} from "../../../environments/environment";
import {ICoordinate} from "../../@entities/coordinate";


describe('MapService', () => {
  let service: MapService;
  let geolocation: Geolocation;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(MapService);
  });

  let httpTestingController: HttpTestingController;
  beforeEach(() => httpTestingController = TestBed.get(HttpTestingController));

  //vérifier qu'il n'y a aucune requête en attente
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCoordinateByLocalisationWithGoodValues', () => {
    let latitude: string = "37.42222090274135";
    let longitude: string = "-122.08410423763085";
    let result: ICoordinate;

    let mySubscription = service.getCoordinateByLocalisation(latitude, longitude)
      .subscribe(_coordinate => result = _coordinate);

    const req = httpTestingController.expectOne((httpRequest) => {
      return httpRequest.url.includes(latitude) && httpRequest.url.includes(longitude);
    });

    req.flush({
      "latitude": latitude,
      "longitude": longitude,
      "timezone_id": "",
      "offset": -7,
      "country_code": "",
      "map_url": "",
    });

    expect(result.latitude).toEqual(latitude);
    expect(result.longitude).toEqual(longitude);
    mySubscription.unsubscribe();
  });

  it('getCoordinateByLocalisationWithBadValues', () => {
    let latitude: string = "37.42222090274135";
    let longitude: string = "-666";
    let result: ICoordinate;

    let mySubscription = service.getCoordinateByLocalisation(latitude, longitude)
      .subscribe(_coordinate => result = _coordinate);

    const req = httpTestingController.expectOne((httpRequest) => {
      return httpRequest.url.includes(latitude) && httpRequest.url.includes(longitude);
    });

    const msg = 'invalid coordinates';
    req.flush(msg, { status: 400, statusText: 'Bad request' });

    expect(result.latitude).toEqual("0");
    expect(result.longitude).toEqual("0");
    expect(result.map_url).toContain("400");
    mySubscription.unsubscribe();
  });


});

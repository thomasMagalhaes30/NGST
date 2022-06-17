import { TestBed } from '@angular/core/testing';

import { MapService } from './map.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ICoordinate} from "@entities/coordinate";
import {Geolocation} from "@capacitor/geolocation";
import {mockGeolocation} from "../../../../__mocks__/@capacitor/geolocation";


describe('MapService', () => {
  let service: MapService;
  let httpTestingController: HttpTestingController;
  let geolocation: Geolocation;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(MapService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

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

  it('getPositionByGeolocation', async () => {
    spyOn(Geolocation, 'getCurrentPosition');
    (Geolocation.getCurrentPosition as any)
      .withArgs()
      .and.returnValue(Promise.resolve(mockGeolocation));

    let result = await service.getPositionByGeolocation();

    expect(result.coords.latitude).toEqual(30);
    expect(result.coords.longitude).toEqual(20);
  });

  // todo faire un test dans le cas ou getCurrentPosition à une erreur
});

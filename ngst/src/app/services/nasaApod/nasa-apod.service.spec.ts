import {fakeAsync, TestBed} from '@angular/core/testing';

import { NasaApodService } from './nasa-apod.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";
import {IApod} from "../../@entities/apod";

describe('NasaApodService', () => {
  let service: NasaApodService;
  let todayDate: Date;
  let todayDateString: String;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(NasaApodService);

    todayDate = new Date();
    todayDateString = `${todayDate.getFullYear()}-${todayDate.getMonth()}-${todayDate.getDate()}`;
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

  it('getTodayApod', fakeAsync(() => {
    let apodDate: string;

    let mySubscription = service.getTodayApod()
      .subscribe(_apod => apodDate = _apod.date);

    const req = httpTestingController.expectOne(`https://api.nasa.gov/planetary/apod?api_key=${environment.nasaApiKey}`);

    req.flush({
      date: todayDateString,
      explanation: "",
      hdurl: "",
      title: "",
      url: ""
    });

    expect(apodDate).toEqual(todayDateString);
    mySubscription.unsubscribe();
  }));

  it('getRandomApod', fakeAsync(() => {
    let apodDate: string;

    let mySubscription = service.getRandomApod()
      .subscribe(_apod => apodDate = _apod.date);

    const req = httpTestingController.expectOne((httpRequest) => {
      let paramDate = new Date(httpRequest.params.get('date'));
      return (new Date(0) <= paramDate && paramDate <= todayDate);
    });

    req.flush({
      date: "2008-7-13",
      explanation: "",
      hdurl: "",
      title: "",
      url: ""
    });

    expect(apodDate).toEqual("2008-7-13");
    mySubscription.unsubscribe();
  }));

  it('getApodByDate', fakeAsync(() => {
    let apodDate: string;

    let mySubscription = service.getApodByDate(2001, 12, 30)
      .subscribe(_apod => apodDate = _apod.date);


    const req = httpTestingController.expectOne(`https://api.nasa.gov/planetary/apod?date=2001-12-30&api_key=${environment.nasaApiKey}`);

    req.flush({
      date: "2001-12-30",
      explanation: "",
      hdurl: "",
      title: "",
      url: ""
    });

    expect(apodDate).toEqual("2001-12-30");
    mySubscription.unsubscribe();
  }));

  // cas ou l'api ne repond pas avec une 200
  it('getApodButApiNotUnreachable', fakeAsync(() => {
    let apod : IApod;

    let mySubscription = service.getTodayApod()
      .subscribe(_apod => apod = _apod);

    const req = httpTestingController.expectOne(`https://api.nasa.gov/planetary/apod?api_key=${environment.nasaApiKey}`);

    const msg = '404 error';
    req.flush(msg, { status: 404, statusText: 'Not Found' });

    expect(apod.title).toContain("404");
    mySubscription.unsubscribe();
  }));

});

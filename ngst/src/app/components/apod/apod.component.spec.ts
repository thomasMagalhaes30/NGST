import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApodComponent } from './apod.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ApodComponent', () => {
  let component: ApodComponent;
  let debugElement;
  let fixture: ComponentFixture<ApodComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApodComponent ],
      imports: [IonicModule.forRoot() , HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ApodComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.apod = {
      "resource": "string",
      "concept_tags": "string",
      "title": "Light Echoes from V838 Mon",
      "date": "22-01-2022",
      "url": "https://apod.nasa.gov/apod/image/2206/V838Mon_Hubble_960.jpg",
      "hdurl": "https://apod.nasa.gov/apod/image/2206/V838Mon_Hubble_2238.jpg",
      "media_type" : "image",
      "explanation" : "What caused this outburst of V838 Mon? For reasons unknown...",
      "concepts" : "string",
      "thumbnail_url" : "string",
      "copyright" : "string",
      "service_version" : "string",
    };
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show apod info', () => {
    expect(debugElement.nativeElement.querySelector('ion-card-title').textContent)
        .toEqual('Light Echoes from V838 Mon');

    expect(debugElement.nativeElement.querySelector('#apodImg').src)
         .toEqual('https://apod.nasa.gov/apod/image/2206/V838Mon_Hubble_960.jpg');

    expect(debugElement.nativeElement.querySelector('p').textContent)
      .toEqual('What caused this outburst of V838 Mon? For reasons unknown...');
  });
});

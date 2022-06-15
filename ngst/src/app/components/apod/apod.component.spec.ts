import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApodComponent } from './apod.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ApodComponent', () => {
  let component: ApodComponent;
  let fixture: ComponentFixture<ApodComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApodComponent ],
      imports: [IonicModule.forRoot() , HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

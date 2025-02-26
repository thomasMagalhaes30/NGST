import { Component, OnInit, Input} from '@angular/core';
import { NasaApodService } from '@app/services/nasaApod/nasa-apod.service';
import { Observable } from "rxjs";
import { IApod } from 'src/app/@entities/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
})
export class ApodComponent implements OnInit {

  @Input()
  public loadTodayApodOnInit : boolean = true;

  private _apod: IApod = {} as IApod;
  get apod(): IApod {
    return this._apod;
  }

  @Input()
  set apod(val: IApod) {
    //console.log('new value:', val); // <-- do your logic here!
    this._apod = val;
    const btn = document.getElementById('seeApodInHD');
    if(btn != null) btn.innerHTML = "See in hd";
  }

  constructor(private _nasa : NasaApodService) { }

  ngOnInit() {
    if (this.loadTodayApodOnInit){
      this.fetchObservableApod(this._nasa.getTodayApod());
    }
  }

  fetchObservableApod(myObservableApod : Observable<IApod>) {
    myObservableApod.toPromise()
    .then(apod => {
      this.apod = apod;
    })
    .catch(console.error);
  }

  onClickButtonHD(){
    const apodImg = document.getElementById('apodImg');
    const btn = document.getElementById('seeApodInHD');
    apodImg.setAttribute('src', this.apod.hdurl);
    btn.innerHTML = "hd enabled";
  }

  onIonImgWillLoad(){
    // on ajoute pas le style si l'image en possède déjà un
    if (document.querySelector('#apodImg').shadowRoot.styleSheets.length == 1 ){
      return;
    }

    // oui c'est bien comme ça qu'il faut faire
    //host is the element that holds the shadow root:
    let style = document.createElement( 'style' );
    style.innerHTML = 'img { max-height:70vh; }';
    document.querySelector('#apodImg').shadowRoot.appendChild(style);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IApod} from "../../@entities/apod";
import {environment} from "../../../environments/environment";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NasaApodService {

  private static defaultApod: IApod = {
    date: "",
    explanation: "",
    hdurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original-wordmark.svg",
    title: "Une erreur est survenu",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg"
  };

  constructor(private _httpClient : HttpClient) { }

  /**
   * Retourne une date aléatoire entre une date de début et une date de fin
   * @param start la date de début, min date par défaut (attention la date doit être après le 16-06-1995)
   * @param end la date de fin, aujourd'hui par défaut
   */
  private static randomDate(start = new Date("1995-06-16") , end = new Date()) : Date{
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }

  public getApodByDate(year ?: Number, month ?: Number, day ?: Number) : Observable<IApod> {
    let params = new HttpParams();

    if (year && month && day ){
      params = params.set('date', `${year}-${month}-${day}`);
    }

    params = params.set('api_key', environment.nasaApiKey);

    // en cas d'erreur on retourne null
    return this._httpClient.get<IApod>(`https://api.nasa.gov/planetary/apod`, {params})
      .pipe(
        catchError(error => {
          let defaultApod = { ...NasaApodService.defaultApod };
          if (error instanceof HttpErrorResponse){
            defaultApod.title = `Une erreur ${error.status} est survenu`
          }
          return of(defaultApod);
        })
      );
  }

  public getRandomApod() : Observable<IApod>{
    let d = NasaApodService.randomDate();
    return this.getApodByDate(d.getFullYear(), d.getMonth(), d.getDate());
  }

  public getTodayApod() : Observable<IApod>{
    return this.getApodByDate();
  }
}

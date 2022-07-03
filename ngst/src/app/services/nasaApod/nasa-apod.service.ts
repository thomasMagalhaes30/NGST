import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IApod} from "@entities/apod";
import {environment} from "@env/environment";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NasaApodService {

  private static defaultApod: IApod = {
    resource: "",
    concept_tags: "",
    title: "Une erreur est survenu",
    date: "",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
    hdurl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original-wordmark.svg",
    media_type : "error",
    explanation : "",
    concepts : "",
    thumbnail_url : "",
    copyright : "",
    service_version : "",
  };

  constructor(private _httpClient : HttpClient) { }

  public getApodByDateObject(d : Date) : Observable<IApod>
  {
    return this.getApodByDate(d.getFullYear(), d.getMonth()+1, d.getDate());
  }

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

    // en cas d'erreur on retourne un apod par défaut
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
    return this.getApodByDateObject(NasaApodService.randomDate());
  }

  public getTodayApod() : Observable<IApod>{
    return this.getApodByDate();
  }


}

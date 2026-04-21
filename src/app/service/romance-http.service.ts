import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RomanceHttpService {
  private readonly ROMANCE_API: string = environment.url;
  private httpClient: HttpClient

  // old school injection
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  reads(): Observable<any> {
    return this.httpClient.get(this.ROMANCE_API + '/reads');
  }
}

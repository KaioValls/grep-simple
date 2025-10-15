import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repo } from '../models/repository';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private readonly API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }

  public getRepositories() : Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.API_URL}/repositories`);
  }

}

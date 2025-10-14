import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from '../models/repository';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private readonly API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }

  public getRepositories() : Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.API_URL}/repositories/mocked`);
  }

}

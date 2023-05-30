import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bunus } from '../interfaces/bunus.interface';

@Injectable({
  providedIn: 'root',
})
export class BonusDataService {
  private ApiUrl = 'http://localhost:3000/api/bonusdata';
  constructor(private http: HttpClient) {}

  getBonus(): Observable<Bunus[]> {
    return this.http.get<Bunus[]>(this.ApiUrl);
  }
}

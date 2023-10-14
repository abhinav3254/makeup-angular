import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        const url = 'http://makeup-api.herokuapp.com/api/v1/products.json';
        return this.http.get<any>(url);
    }
}

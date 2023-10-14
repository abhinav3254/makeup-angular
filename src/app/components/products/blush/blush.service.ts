import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlushService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush';
        return this.http.get<any>(url);
    }
}

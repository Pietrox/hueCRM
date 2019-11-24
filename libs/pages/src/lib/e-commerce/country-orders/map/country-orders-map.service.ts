import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class CountryOrdersMapService {
	
	constructor(private http: HttpClient) {
	}
	
	getCords(): Observable<any> {
		return this.http.get('assets/leaflet-countries/countries.geo.json');
	}
	
}

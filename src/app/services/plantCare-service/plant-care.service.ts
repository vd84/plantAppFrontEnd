import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PlantCareService {

    url = 'https://plantapprestapi.herokuapp.com/plantcaring';


    constructor(private httpClient: HttpClient) {
        this.getAllPlantCare();
    }


    getAllPlantCare() {

        const httpOptions = {
            headers: new HttpHeaders({
                Accept: 'application/json',
                'Content-Type': 'application/json'
            })

        };
        return this.httpClient.get(this.url, httpOptions);
    }




}

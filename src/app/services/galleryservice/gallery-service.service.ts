import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GalleryServiceService {

    url = 'https://plantapprestapi.herokuapp.com/plant';
    allPlants;

    constructor(private httpClient: HttpClient, private router: Router) {
        this.getAllGalleryImages();
    }


    getAllGalleryImages() {

        const httpOptions = {
            headers: new HttpHeaders({
                Accept: 'application/json',
                'Content-Type': 'application/json'
            })

        };


        return this.httpClient.get(this.url, httpOptions).subscribe(data => {
            this.allPlants = data;
        });
    }


    addPlantPicture(name: string, category: string, publishedDate: string, likes: number, usedId: number, plantCaringId: number) {


        const httpOptions = {
            headers: new HttpHeaders({
                Accept: 'application/json',
                'Content-Type': 'application/json'
            })

        };

        const body = JSON.stringify({
            name,
            category,
            publishedDate,
            likes,
            usedId,
            plantCaringId,

        });

        console.log(body);

        return this.httpClient.post(this.url, body, httpOptions).subscribe(data => {
            console.log(data);
        }, error1 => console.log(error1));

    }

    getUsersPlants(userId) {

        const httpOptions = {
            headers: new HttpHeaders({
                Accept: 'application/json',
                'Content-Type': 'application/json'
            })

        };
        return this.httpClient.get(this.url + '/' + userId, httpOptions);

    }


}

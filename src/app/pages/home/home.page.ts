import {Component, OnInit} from '@angular/core';
import {GalleryServiceService} from '../../services/galleryservice/gallery-service.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    plants;

    constructor(private galleryService: GalleryServiceService) {
    }


    ngOnInit(): void {
        this.generatePage();
    }

    ionViewWillEnter() {
        this.generatePage();

    }

    generatePage() {

        this.getHomeImages();

        console.log(this.plants);

    }


    getHomeImages() {
        this.plants = this.galleryService.allPlants;
    }

    setClickedPlantToLocalStorage(plantId) {
        console.log('fdsafdsafds');
        console.log(plantId);
        localStorage.setItem('chosenPlant', '' + plantId);

    }
}

import {Component, OnInit} from '@angular/core';
import {GalleryServiceService} from '../../services/galleryservice/gallery-service.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.page.html',
    styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

    private allPlants;

    constructor(private galleryService: GalleryServiceService) {
    }

    ngOnInit() {


    }

    ionViewWillEnter() {


    }

    ionViewDidEnter() {

        console.log('funkar2');


    }

    getAllPlants() {

        this.allPlants = this.galleryService.allPlants;
        console.log('funkar');

    }

}

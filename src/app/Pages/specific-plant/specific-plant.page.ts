import {Component, OnInit} from '@angular/core';
import {GalleryServiceService} from '../../services/galleryservice/gallery-service.service';
import {Router} from '@angular/router';
import {PlantCareService} from '../../services/plantCare-service/plant-care.service';

@Component({
    selector: 'app-specific-plant',
    templateUrl: './specific-plant.page.html',
    styleUrls: ['./specific-plant.page.scss'],
})
export class SpecificPlantPage implements OnInit {

    chosenPlant = JSON.stringify({});
    plants = [];
    plantCareForChosenPlant;
    plantCares;


    constructor(private galleryService: GalleryServiceService, private plantCareService: PlantCareService, private router: Router) {
    }

    ngOnInit() {


    }

    ionViewDidEnter() {

        this.plantCareService.getAllPlantCare().subscribe(data =>{
            this.plantCares = data;
        });


    }

    get dataKeys() {
        return Object.keys(this.chosenPlant);
    }

    getChosenPlant() {

        const chosenPlantString = localStorage.getItem('chosenPlant');

        console.log(localStorage.getItem('chosenPlant'));

        if (chosenPlantString === null) {

            this.router.navigateByUrl('/menu/home');

            console.log('no plant chosen');
            return;
        }

        const chosenPlantNumber = +chosenPlantString;


        this.plants = this.galleryService.allPlants;

        this.galleryService.getAllGalleryImages();

        console.log(this.galleryService.allPlants);

        console.log(this.plants);

        Object.keys(this.plants).forEach(key => {
            console.log(this.plants[key].id);

            console.log(chosenPlantNumber);

            if (this.plants[key].id === chosenPlantNumber) {
                this.chosenPlant = this.plants[key];
                this.getPlantCareForChosenPlant(this.plants[key]);
                console.log(this.chosenPlant);

            }
        });

    }

    private getPlantCareForChosenPlant(plant) {



        Object.keys(this.plantCares).forEach(key => {
            console.log(this.plantCares[key]);

            if (this.plantCares[key].id === plant.plant_caring_id) {
                this.plantCareForChosenPlant = this.plantCares[key];
                console.log(this.plantCareForChosenPlant);

            } else {
                console.log('Does not have plantcare');
            }
        });


    }
}

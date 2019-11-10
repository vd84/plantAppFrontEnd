import {Component, OnInit} from '@angular/core';
import {GalleryServiceService} from '../../services/galleryservice/gallery-service.service';
import {UserServiceService} from '../../services/user-service/user-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    userPlants;

    constructor(private galleryService: GalleryServiceService,
                private userService: UserServiceService,
                private router: Router) {
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.getUsersPlants();
    }

    addPlant() {

        this.galleryService.addPlantPicture('1', '1', '1', 1, 1, 1);


    }

    getUsersPlants() {
        if (this.userService.loggedInUser === null) {
            this.router.navigateByUrl('/menu/login');
            console.log('Not logged in');
            return;
        }
        console.log('getuserPlants() called');

        console.log(this.userService.loggedInUser);

        this.galleryService.getUsersPlants(this.userService.loggedInUser[0].id).subscribe(data => {
            this.userPlants = data;
        }, error1 => console.log(error1));


    }


}

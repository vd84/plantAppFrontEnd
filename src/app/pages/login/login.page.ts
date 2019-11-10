import {Component, OnInit} from '@angular/core';
import {Facebook} from '@ionic-native/facebook/ngx';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {AlertController, LoadingController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserServiceService} from '../../services/user-service/user-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    FB_APP_ID = 494401471359467;
    private username: string;

    constructor(
        private fb: Facebook,
        private nativeStorage: NativeStorage,
        public loadingController: LoadingController,
        private router: Router,
        private platform: Platform,
        public alertController: AlertController,
        private userService: UserServiceService
    ) {
    }

    async doFbLogin() {
        const loading = await this.loadingController.create(
            {
                message: 'Please wait..'
            });
        this.presentLoading(loading);

        const permissions = ['public profile', 'email'];

        this.fb.login(permissions).then(response => {
                const userId = response.authResponse.userID;

                this.fb.api('/me?fields=name,email', permissions).then(
                    user => {
                        user.picture = 'https://graph.facebook.com/' + userId + '/picture?type=large';
                        this.nativeStorage.setItem('facebook_user',
                            {
                                name: user.name,
                                email: user.email,
                                picture: user.picture
                            })
                            .then(() => {
                                this.router.navigate(['home']);
                                loading.dismiss();
                            });
                    }, error => {
                        console.log(error);
                        loading.dismiss();
                    }
                );

            }, error => {
                console.log(error);
                if (!this.platform.is('cordova')) {
                    this.presentAlert();

                }
                loading.dismiss();
            }
        );

    }

    ordinaryLogin() {


        this.userService.ordinaryLogin(this.username).subscribe(data => {

            const returnedUser = data;
            if (returnedUser !== null) {
                this.router.navigateByUrl('/menu/home');
                this.userService.loggedInUser = returnedUser;
                console.log(this.userService.loggedInUser);
            } else {
                console.log('USER NOT FOUND');
            }

        }, error1 => console.log(error1));


    }

    async presentAlert() {
        const alert = await this.alertController.create({
            message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
            buttons: ['OK']
        });

        await alert.present();
    }

    async presentLoading(loading) {
        return await loading.present();
    }

    ngOnInit(): void {
    }

    goToGallery() {
        this.router.navigate(['gallery']);
    }
}

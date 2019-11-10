import {Injectable} from '@angular/core';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

    url = 'https://plantapprestapi.herokuapp.com/user';

    loggedInUser;

    constructor(private fb: Facebook, private httpClient: HttpClient) {
    }


    loginFacebook() {
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
            .catch(e => console.log('Error logging into Facebook', e));


        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }

    ordinaryLogin(username: string) {

        const httpOptions = ({
            headers: new HttpHeaders({
                Accept: 'application/json',
                'Content-Type': 'application/json'
            })
        });



        return this.httpClient.get(this.url + '/login/' + username, httpOptions);



    }

}

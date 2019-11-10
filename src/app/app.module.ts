import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Facebook} from '@ionic-native/facebook/ngx';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';



@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        HttpClientModule,
        BrowserModule,
        HttpClient,
        NativeStorage,
        Facebook,
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

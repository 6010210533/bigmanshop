import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PizzaPage } from '../pages/pizza/pizza';
import { DrinkPage } from '../pages/drink/drink';
import { Orderpizza1Page } from '../pages/orderpizza1/orderpizza1';
import { BasketPage } from '../pages/basket/basket';
import { PayPage } from '../pages/pay/pay';
import { LocationPage } from '../pages/location/location';
import { ConfirmpayPage } from '../pages/confirmpay/confirmpay';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EditdrinkPage } from '../pages/editdrink/editdrink';
import { ConfirmaddressPage } from '../pages/confirmaddress/confirmaddress';
import { convertDataToISO } from 'ionic-angular/umd/util/datetime-util';
import { Orderpizza2Page } from '../pages/orderpizza2/orderpizza2';
import { Orderpizza3Page } from '../pages/orderpizza3/orderpizza3';
import { Orderpizza4Page } from '../pages/orderpizza4/orderpizza4';

var config = {
  apiKey: "AIzaSyAed4UQDkZ3zfSzXadj-rFJmsFsEbqUMBE",
  authDomain: "bidmanshop-13a53.firebaseapp.com",
  databaseURL: "https://bidmanshop-13a53.firebaseio.com",
  projectId: "bidmanshop-13a53",
  storageBucket: "",
  messagingSenderId: "980990901424"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PizzaPage,
    DrinkPage,
    Orderpizza1Page,
    BasketPage,
    PayPage,
    LocationPage,
    ConfirmpayPage,
    EditdrinkPage,
    ConfirmaddressPage,
    Orderpizza2Page,
    Orderpizza3Page,
    Orderpizza4Page

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PizzaPage,
    DrinkPage,
    Orderpizza1Page,
    BasketPage,
    PayPage,
    LocationPage,
    ConfirmpayPage,
    EditdrinkPage,
    ConfirmaddressPage,
    Orderpizza2Page,
    Orderpizza3Page,
    Orderpizza4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

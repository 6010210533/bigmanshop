import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions } from '@angular/http';

import { Orderpizza1Page } from '../orderpizza1/orderpizza1';
import { Orderpizza2Page } from '../orderpizza2/orderpizza2';
import { Orderpizza3Page } from '../orderpizza3/orderpizza3';
import { Orderpizza4Page } from '../orderpizza4/orderpizza4';
// import { Orderpizza2Page } from '../orderpizza2/orderpizza2';
// import { Orderpizza3Page } from '../orderpizza3/orderpizza3';
// import { Orderpizza4Page } from '../orderpizza4/orderpizza4';


@IonicPage()
@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html',
})
export class PizzaPage {
  header: any;
  option: any;
  data: any;
  pizza: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, ) {
    this.option = new RequestOptions({
      headers: this.header,
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzaPage');
  }
  Orderpizza1() {
    this.navCtrl.push(Orderpizza1Page)
  }
   Orderpizza2(){
    this.navCtrl.push(Orderpizza2Page)

   }

   Orderpizza3(){
    this.navCtrl.push(Orderpizza3Page)
   }

   Orderpizza4(){
    this.navCtrl.push(Orderpizza4Page)
   }
  

}

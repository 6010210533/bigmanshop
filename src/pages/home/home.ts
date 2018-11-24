import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaPage } from '../pizza/pizza';
import { DrinkPage } from '../drink/drink';
import { BasketPage } from '../basket/basket';
import { Orderpizza1Page } from '../orderpizza1/orderpizza1';
import { Orderpizza2Page } from '../orderpizza2/orderpizza2';
import { Orderpizza3Page } from '../orderpizza3/orderpizza3';
import { Orderpizza4Page } from '../orderpizza4/orderpizza4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }

nextpizza(){
  this.navCtrl.push(PizzaPage)
}

nextdrink(){
  this.navCtrl.push(DrinkPage)
  }
onClickbasket(){
  this.navCtrl.push(BasketPage)
  }
nextpizza1(){
  this.navCtrl.push(Orderpizza1Page)
  }
nextpizza2(){
  this.navCtrl.push(Orderpizza2Page)
  }
nextpizza3(){
  this.navCtrl.push(Orderpizza3Page)
  }
nextpizza4(){
  this.navCtrl.push(Orderpizza4Page)
  }
}

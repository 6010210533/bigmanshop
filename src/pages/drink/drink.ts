import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

/**
 * Generated class for the DrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})
export class DrinkPage {

    shoppingItem = {} as ShoppingItem
    shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>
arrData 
numberp 
pepsi = 'pepsi'
cost
all = []


  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list("/myItems/");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

  orderpepsi(shoppingItem: ShoppingItem){
    shoppingItem.itemName = 'pepsi'
    shoppingItem.itemCost = shoppingItem.itemAmout*40
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemAmout: Number(this.shoppingItem.itemAmout),
      itemCost : Number(this.shoppingItem.itemCost)
    });
    
  }
  ordercoke(shoppingItem: ShoppingItem){
    shoppingItem.itemName = 'coke'
    shoppingItem.itemCost = shoppingItem.itemAmout*40
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemAmout: Number(this.shoppingItem.itemAmout),
      itemCost : Number(this.shoppingItem.itemCost)
    });
  }
  orderfanta(shoppingItem: ShoppingItem){
    shoppingItem.itemName = 'fanta'
    shoppingItem.itemCost = shoppingItem.itemAmout*40
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemAmout: Number(this.shoppingItem.itemAmout),
      itemCost : Number(this.shoppingItem.itemCost)
    });
  }
  ordersprite(shoppingItem: ShoppingItem){
    shoppingItem.itemName = 'sprite'
    shoppingItem.itemCost = shoppingItem.itemAmout*40
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemAmout: Number(this.shoppingItem.itemAmout),
      itemCost : Number(this.shoppingItem.itemCost)
    });
}
}

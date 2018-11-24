import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import { PayPage } from '../pay/pay';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { EditdrinkPage } from '../editdrink/editdrink';
/**
 * Generated class for the BasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {
 
  
  priceTotal : number;
  items: Int16Array;
  $key : string;
shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingListRef$=this.database.list('/myItems/');
    }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
  }

    delete(shoppingItem: ShoppingItem)
  {
    this.shoppingListRef$.remove(shoppingItem.$key);
  }
    editItem(shoppingItem: ShoppingItem){

      this.navCtrl.push(EditdrinkPage, { shoppingItemId: shoppingItem.$key  })
    }
  onClickPay(){
    this.navCtrl.push(PayPage)
  }

  onClickDeleteAll(){
    
    this.shoppingListRef$.remove(this.$key);
    
  }

  sumValue = 0;
  averageValue = 0;
// sum values
calculateSum(value) {
  this.sumValue = this.sumValue + parseInt(value);
}
calculateAverage(count) {
  this.averageValue = this.sumValue / count;
}

  
  plusNumber(){
    
    this.database.list('/myItems/').subscribe((_items: any) => {
      this.priceTotal = 0;
      this.items.forEach((item: any) => {
        this.priceTotal += item.itemAmout;
        return this.priceTotal;
      })
    })
  }
    
}

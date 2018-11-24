import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ShoppingItem1 } from '../../models/shopping-item1/shopping-item1';



@IonicPage()
@Component({
  selector: 'page-orderpizza1',
  templateUrl: 'orderpizza1.html',
})
export class Orderpizza1Page {
  
  shoppingItem1 = {} as ShoppingItem1
  
  shoppingItem1Ref$: FirebaseListObservable<ShoppingItem1[]>

constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
  this.shoppingItem1Ref$ = this.database.list("/myItems/"); 
}

ionViewDidLoad() {
  console.log('ionViewDidLoad Orderpizza1Page');
}


Orderpizza(shoppingItem1: ShoppingItem1){
  shoppingItem1.itemNamep = 'พิซซ่าไก่'
  shoppingItem1.itemCostp = shoppingItem1.itemAmoutp*249
  this.shoppingItem1Ref$.push({
    itemNamep: this.shoppingItem1.itemNamep,
    itemSizep: this.shoppingItem1.itemSizep,
    itemEdgep: this.shoppingItem1.itemEdgep,
    itemAmoutp: Number(this.shoppingItem1.itemAmoutp),
    itemCostp : Number(this.shoppingItem1.itemCostp)
  });


}


}
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { ConfirmpayPage } from '../confirmpay/confirmpay';
import { HomePage } from '../home/home';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  $key : string;

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingListRef$=this.database.list('/myItems/');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

onClickLocation(){
    this.navCtrl.push(LocationPage)
}

onClickCancel(){
  
    
    this.shoppingListRef$.remove(this.$key);
    this.navCtrl.setRoot(HomePage)

}

}

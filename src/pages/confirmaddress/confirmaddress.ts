import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmpayPage } from '../confirmpay/confirmpay';
import { HomePage } from '../home/home';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
/**
 * Generated class for the ConfirmaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmaddress',
  templateUrl: 'confirmaddress.html',
})
export class ConfirmaddressPage {

  $key : string;

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingListRef$=this.database.list('/myItems/');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmaddressPage');
  }

  onClickConfirm(){
    this.shoppingListRef$.remove(this.$key);
    this.navCtrl.setRoot(ConfirmpayPage)
}

onClickCancel(){
  this.shoppingListRef$.remove(this.$key);
    this.navCtrl.setRoot(HomePage)

}

}

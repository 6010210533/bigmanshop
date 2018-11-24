import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPage } from '../pay/pay';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Address } from '../../models/address/address.interface';
import { ConfirmaddressPage } from '../confirmaddress/confirmaddress';
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  address = {} as  Address
  
  addressRef$: FirebaseListObservable<Address[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.addressRef$ = this.database.list('address'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

  setAddress(address: Address){
    this.addressRef$.push({
      itemName: this.address.itemName,
      itemLastname: this.address.itemLastname,
      itemEmail: this.address.itemEmail,
      itemAddress: this.address.itemAddress,
      itemTel : this.address.itemTel
    });
    this.navCtrl.setRoot(ConfirmaddressPage)
  }
}
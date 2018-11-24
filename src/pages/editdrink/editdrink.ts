import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the EditdrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdrink',
  templateUrl: 'editdrink.html',
})
export class EditdrinkPage {

shoppingItemSubscription: Subscription;
shoppingItem = {} as ShoppingItem;

shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;



constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
  const shoppingItemId = this.navParams.get('shoppingItemId');
  console.log(shoppingItemId);
  this.shoppingItemRef$ = this.database.object(`myItems/${shoppingItemId}`);

  this.shoppingItemSubscription = 
  this.shoppingItemRef$.subscribe(
    shoppingItem => this.shoppingItem = shoppingItem);

  }

    editShoppingItem(shoppingItem: ShoppingItem){
      shoppingItem.itemCost = shoppingItem.itemAmout*40
      this.shoppingItemRef$.update(shoppingItem);
    
      this.navCtrl.pop();
    }

  
    ionViewWillLeave(){
      this.shoppingItemSubscription.unsubscribe();
    }
 
  
 
}

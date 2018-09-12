import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   users: any[] = [];

  constructor(
  public navCtrl: NavController,
  public restProvider: RestProvider
  ) {}

   ionViewDidLoad(){
    this.restProvider.getUsers()
    .subscribe(
      (data) => {
      this.users = data['results'];
      },
      (error) =>{
         console.error(error);
      }
    )
  }

}

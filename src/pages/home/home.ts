import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { createLogicalNot } from 'typescript';
import { CategoriasPage } from '../categorias/categorias';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) { //declaracao typeScritp e

    }

    ionViewWillEnter(){ // metodos
      this.menu.swipeEnable(false);
    }

    ionViewDidLeave(){
      this.menu.swipeEnable(true);
    }

    login() { // metodos
    this.navCtrl.setRoot('CategoriasPage');
  }
}

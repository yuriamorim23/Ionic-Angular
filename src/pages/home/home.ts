import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/cresdenciais.dto';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = { // varialvel para capturar entrada de dados
    email: "",
    senha: ""
  };


  constructor(public navCtrl: NavController, public menu: MenuController) { //declaracao typeScritp 


    }

    ionViewWillEnter(){ // metodos
      this.menu.swipeEnable(false);
    }

    ionViewDidLeave(){
      this.menu.swipeEnable(true);
    }

    login() { // metodos
      console.log(this.creds);
    this.navCtrl.setRoot('CategoriasPage');
  }
}

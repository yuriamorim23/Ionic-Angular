import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { CategoriaDTO } from '../../models/categoria.dto';
import { CategoriaService } from '../../services/domain/categoria.service';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService: CategoriaService) { // metodo chamado no construtor precisa ser declarado
  }

  ionViewDidLoad() {
    this.categoriaService.findAll()
        .subscribe(response => {
          console.log(response);
          this.items = response;
        },
        error => {});
    }

  showProdutos() {
    this.navCtrl.push('ProdutosPage');    
    }

  } 

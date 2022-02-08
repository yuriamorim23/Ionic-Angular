// bluid da requisicao de API olhar no site angular.io http client
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";

@Injectable()
export class CategoriaService {


    constructor(public http: HttpClient){
    }

    findAll() : Observable<CategoriaDTO[]>{ // metodo para retornar a API olhar no site do angular.io 
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }

}
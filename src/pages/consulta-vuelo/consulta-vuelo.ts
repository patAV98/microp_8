import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Avion } from '../../models/avion.model';
import { AvionService } from '../../services/avion.service';
import { FacturarVueloPage } from '../facturar-vuelo/facturar-vuelo';
import { Tarjeta } from "../../models/tarjeta.model";
import { TarjetaService } from '../../services/tarjeta.service';
import { TarjetaEmbarquePage } from '../tarjeta-embarque/tarjeta-embarque';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ConsultaVueloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta-vuelo',
  templateUrl: 'consulta-vuelo.html',
})
export class ConsultaVueloPage {

  //vuelos: Avion[] = [];
  tarjetas: Tarjeta[] = [];

  vuelos$: Observable<Avion[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private AvionService: AvionService,  private TarjetaService: TarjetaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaVueloPage');
  }

  ionViewWillEnter(){
    this.vuelos$ = this.AvionService
    .getVuelos()  //Retorna la DB
    .snapshotChanges() //retorna los cambios en la DB (key and value)
    .map(
      /*
      Estas líneas retornan un array de  objetos con el id del registro y su contenido
      {
        "key":"value",
        contact.name,
        contact.organization,
        ...
      }
      */
      changes => {
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      }); 
  }

  onLoadFacturar(value: String){
    if(value != "Facturar"){
      this.navCtrl.push(FacturarVueloPage);
    }
    else{
      this.navCtrl.push(TarjetaEmbarquePage);
    }
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Avion } from '../../models/avion.model';
import { AvionService } from '../../services/avion.service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ReservaVueloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserva-vuelo',
  templateUrl: 'reserva-vuelo.html',
})
export class ReservaVueloPage {

  aviones$: Observable<Avion[]>;
  //aviones: Avion[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private avionService: AvionService){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservaVueloPage');
  }

  getAllPlanes(){
    //this.aviones = this.AvionService.getAviones();
    this.aviones$ = this.avionService
    .getAviones()  //Retorna la DB
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
  
  onAddVuelo($event,avion){
     //this.AvionService.addVuelo(value);
     this.avionService.addVuelo(avion);
     }
    
}

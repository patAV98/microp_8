import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ReservaVueloPage } from '../pages/reserva-vuelo/reserva-vuelo';
import { ConsultaVueloPage } from '../pages/consulta-vuelo/consulta-vuelo';
import { InfoLegalPage } from '../pages/info-legal/info-legal';
import { ContactoPage } from '../pages/contacto/contacto';
import { FacturarVueloPage } from '../pages/facturar-vuelo/facturar-vuelo';
import { TarjetaEmbarquePage } from '../pages/tarjeta-embarque/tarjeta-embarque';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AvionService } from '../services/avion.service';
import { TarjetaService } from '../services/tarjeta.service';
import { Services } from '@angular/core/src/view';
import {FIREBASE_CONFIG} from '../app/firebase.credentials';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';



@NgModule({
  declarations: [
    MyApp,
    ReservaVueloPage,
    ConsultaVueloPage,
    InfoLegalPage,
    ContactoPage,
    FacturarVueloPage,
    TarjetaEmbarquePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReservaVueloPage,
    ConsultaVueloPage,
    InfoLegalPage,
    ContactoPage,
    FacturarVueloPage,
    TarjetaEmbarquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, AvionService, TarjetaService
  ]
})
export class AppModule {}

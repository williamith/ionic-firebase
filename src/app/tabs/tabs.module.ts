import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyB65E4W1Z0FoH8GOfsXydbBaDnDiBO5B3Y",
  authDomain: "gmisdatabase.firebaseapp.com",
  databaseURL: "https://gmisdatabase.firebaseio.com",
  projectId: "gmisdatabase",
  storageBucket: "gmisdatabase.appspot.com",
  messagingSenderId: "1091663065763"
};

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

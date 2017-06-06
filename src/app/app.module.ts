import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Camera } from '@ionic-native/camera';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { UsersProvider } from '../providers/users/users';
import { TasksProvider } from '../providers/tasks/tasks';
import { TasksSqliteProvider } from '../providers/tasks-sqlite/tasks-sqlite';
import { TasksStorageProvider } from '../providers/tasks-storage/tasks-storage';
import { TasksFirebaseProvider } from '../providers/tasks-firebase/tasks-firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBn-w2EPY_jR75eLvcQrttnfaTBvB_-XP0",
  authDomain: "ion-demo-156701.firebaseapp.com",
  databaseURL: "https://ion-demo-156701.firebaseio.com",
  projectId: "ion-demo-156701",
  storageBucket: "ion-demo-156701.appspot.com",
  messagingSenderId: "564553849534"
};

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '6044116d'
  },
  'push': {
    'sender_id': '564553849534',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434',
        'forceShow': true
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Geolocation,
    GoogleMaps,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    TasksProvider,
    TasksSqliteProvider,
    TasksStorageProvider,
    TasksFirebaseProvider
  ]
})
export class AppModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { 
  GoogleMaps,
  LatLng,
  CameraPosition,
  GoogleMap,
  GoogleMapsEvent,
  MarkerOptions
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: GoogleMap;
  markers: any[] = [
    {
      position:{
        latitude: -17.3891053,
        longitude: -66.2525101,
      },
      title:'Point 1',
      icon: 'www/assets/images/marker-blue.png'
    },
    {
      position:{
        latitude: -17.3824502,
        longitude: -66.2574024,
      },
      title:'Point 2',
      icon: 'www/assets/images/marker-green.png'
    },
    {
      position:{
        latitude: -17.3861771,
        longitude: -66.2554283,
      },
      title:'Point 3',
      icon: 'www/assets/images/marker-blue.png'
    },
    {
      position:{
        latitude: -17.3955145,
        longitude: -66.2545271,
      },
      title:'Point 4',
      icon: 'www/assets/images/marker-green.png'
    },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private googleMaps: GoogleMaps
  ) {
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition()
    .then(position=>{
      this.loadMap(position);
    })
  }

  private loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let element: HTMLElement = document.getElementById('map');

    //ltlng
    let myPosition: LatLng = new LatLng(latitude, longitude);

    //camara
    let camaraPosition: CameraPosition = {
      target: myPosition,
      zoom: 12,
      tilt: 30,
    }

    this.map = this.googleMaps.create(element);

    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(()=>{
      console.log('el mapa ya esta listo');
      this.map.moveCamera(camaraPosition);

      let marker = {
        position: {
          latitude: latitude,
          longitude: longitude,
        },
        title: 'Hola aqui estoy',
        icon: 'www/assets/images/marker-pink.png'
      };

      this.addMarker(marker);

      this.markers.forEach(marker =>{
        console.log(marker);
        this.addMarker(marker);
      });
    }); 
  }

  private addMarker(options: any){
    let marker: MarkerOptions ={
      position: new LatLng(options.position.latitude, options.position.longitude),
      title: options.title,
      icon: options.icon
    }
    this.map.addMarker( marker );
  }

}

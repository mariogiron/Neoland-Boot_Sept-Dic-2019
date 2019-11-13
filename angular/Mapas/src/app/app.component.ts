import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('GMap', { static: false }) mapaElement: any;

  map: any;

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.loadMap(position);
      });
    } else {
      alert('Ya la hemos liado!');
    }
  }

  loadMap(position) {
    const mapProps = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID // ROADMAP, SATELLITE, TERRAIN
    };
    // console.log(this.mapaElement.nativeElement)
    this.map = new google.maps.Map(document.getElementById('mapId'), mapProps);

    const marker = new google.maps.Marker({
      position: mapProps.center,
      // position: new google.maps.LatLng(LATITUD, LONGITUD)
      title: 'Estoy aquí Mamá!!'
    });
    marker.setMap(this.map);

    google.maps.event.addListener(this.map, 'click', (event) => {
      console.log(event);

      const newMarker = new google.maps.Marker({
        position: event.latLng,
        animation: google.maps.Animation.BOUNCE,
        icon: 'https://interactives.politibot.io/psoe-results/img/pedro_sanchez.png'
      });
      newMarker.setMap(this.map);
    });

  }

}

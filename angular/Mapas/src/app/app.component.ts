import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('GMap', { static: false }) mapaElement: any;

  directionsService: any;
  directionsDisplay: any;

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

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();

    const mapProps = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID // ROADMAP, SATELLITE, TERRAIN
    };
    // console.log(this.mapaElement.nativeElement)
    this.map = new google.maps.Map(document.getElementById('mapId'), mapProps);

    this.directionsDisplay.setMap(this.map);

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

    const options = {
      types: ['address']
    };
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('inputPlaces'), options);

    autocomplete.addListener('place_changed', function () {
      const place = autocomplete.getPlace();
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());

      this.map.setCenter(place.geometry.location);

      const markerPlace = new google.maps.Marker({
        position: place.geometry.location
        // position: new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng())
      });
      markerPlace.setMap(this.map);
    }.bind(this));

  }

  manejarClick() {
    const options = {
      origin: 'plaza españa 11, madrid',
      destination: 'lopez de hoyos 34, madrid',
      travelMode: google.maps.TravelMode.TRANSIT
    };

    this.directionsService.route(options, function (result, status) {
      console.log(result);
      this.directionsDisplay.setDirections(result);
    }.bind(this));
  }

}

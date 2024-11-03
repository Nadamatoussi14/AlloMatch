import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from "@ionic-native/native-geocoder/ngx";

declare var google: any;

@Component({
  selector: 'app-pickup-location',
  templateUrl: './pickup-location.page.html',
  styleUrls: ['./pickup-location.page.scss'],
})
export class PickupLocationPage implements AfterViewInit {
  selectedLocation: string;
  geocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 1
  };

  constructor(private router: Router, private nativeGeocoder: NativeGeocoder) {}

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.7128, lng: -74.0060 },
      zoom: 12,
    });

    const marker = new google.maps.Marker({
      position: { lat: 40.7128, lng: -74.0060 },
      map: map,
      draggable: true,
    });

    google.maps.event.addListener(marker, 'dragend', () => {
      const position = marker.getPosition();
      this.selectedLocation = `${position.lat()}, ${position.lng()}`;
      this.convertToAddress(position.lat(), position.lng());
    });
  }

  convertToAddress(latitude: number, longitude: number) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geocoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        if (result.length > 0) {
          const address = `${result[0].subLocality || ''}, ${result[0].locality || ''}, ${result[0].administrativeArea || ''}, ${result[0].countryName || ''}`.trim();
          this.selectedLocation = address;
        }
      })
      .catch((error: any) => console.log(error));
  }

  confirmLocation() {
    this.router.navigate(['/event-create'], {
      state: { pickupLocation: this.selectedLocation },
    });
  }
}

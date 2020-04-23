import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  //  paises: any[] = [];
  nuevasCanciones: any[] = [];
  constructor(private spotify: SpotifyService) {
    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((respuesta: any) => {
    //   this.paises = respuesta;
    // });
    this.spotify.getNewRealease().subscribe((data: any) => {
      console.log(data.albums.items);
      this.nuevasCanciones = data.albums.items;
    });
  }

  ngOnInit(): void {
  }

}

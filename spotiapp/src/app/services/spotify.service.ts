import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewRealease() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDKhFYI7QXmnRY-jGfMptBf_K1nFuWLtQnh53VgNAPlMsyv9i4aj143IIymnFZnjj2YlL6mlKYwiPhn2aY'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}

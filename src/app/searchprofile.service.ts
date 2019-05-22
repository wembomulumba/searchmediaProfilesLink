import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SearchprofileService {
 api_key = 'f11a5f553da1508f141a23093057875a';
 keyword = 'fabriceotepa@hotmail.com';

  // construction main entry point of our service class
  // we inject our http client right here ' + this.keyword + '
  constructor(private http: HttpClient) {
    console.log('You are now connected to the service Provider');
   }

    searchfunction() {
    return this.http
    .get('https://api.social-searcher.com/v2/search?q=' + this.keyword + '&network=web&key=' + this.api_key);
   }
}

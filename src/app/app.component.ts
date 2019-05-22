import { Component } from '@angular/core';
import { SearchprofileService } from './searchprofile.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient  } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  api_key = 'f11a5f553da1508f141a23093057875a';
  title = 'search-profiles';
  data: any;
  keyword = new FormControl('');
  constructor(private searchproAPi: SearchprofileService, private http: HttpClient) {
    // this.searchproAPi.searchfunction()
   //  .subscribe(data => {
   //   console.log(data['posts']);
   //   this.data = data['posts'];
  // });

   // console.log(this.keyword);
  }


// Search Article on User Click function

 searchAllProfiles(keyword) {
  // alert('loading content');
   this.keyword = keyword;
   console.log(this.keyword);
  return this.http
  .get('https://api.social-searcher.com/v2/search?q=' + keyword + '&network=web&key=' + this.api_key)
  .subscribe(data => {
    console.log(data['posts']);
    this.data = data['posts'];
  });
  keyword.value = '';
  keyword.setValue = '';

 }



}



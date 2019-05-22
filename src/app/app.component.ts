import { Component } from '@angular/core';
import { SearchprofileService } from './searchprofile.service';
import { catchError, map, tap } from 'rxjs/operators';

import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-profiles';
  data: any;
  keyword = '';
  constructor(private searchproAPi: SearchprofileService) {
    this.searchproAPi.searchfunction()
     .subscribe(data => {
      console.log(data['posts']);
      this.data = data['posts'];
  });

   console.log(this.keyword);
  }

   // Initialized the search function
  // tslint:disable-next-line:use-life-cycle-interface
  // ngOnInit() {
    // load profile
  // this.searchproAPi.searchfunction()
  // .subscribe(data => this.data = data['meta']);
  // }
// Search Article on User Click function
searchProfiles() {
  this.searchproAPi.searchfunction()
    .subscribe(data => {
    console.log(data['posts']);
    this.data = data['posts'];
  });
}



}



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pwa-test';

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get('https://hot-public-dev.azurewebsites.net/storefrontapi/hot/settings').subscribe( result => console.log(result))
  }
}

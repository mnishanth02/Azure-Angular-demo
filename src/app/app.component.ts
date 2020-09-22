import { Component, OnInit } from '@angular/core';
import { ConfigPropertiesService } from './services/config-properties.service';
import { Properties } from './models/properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'azure-blog-storage';
  appProperties: Properties = null;

  constructor(private configService: ConfigPropertiesService) {}

  ngOnInit(): void {
    this.configService.getProperties().then((results) => {
      console.log(results);
      this.appProperties = results;
    });
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Properties } from '../models/properties';

declare var AzureStorage: any;

@Injectable({
  providedIn: 'root',
})
export class ConfigPropertiesService {
  private blobContainerUrl: string;

  constructor() {
    this.blobContainerUrl =
      'https://' +
      environment.azureContainers.playlist +
      '.' +
      environment.azureContainers.baseUrl;
  }

  getProperties(): Promise<Properties> {
    // const blobService = AzureStorage.createBlobServiceAnonymous(
    //   this.blobContainerUrl
    // );
    var blobService = AzureStorage.Blob.createBlobServiceWithSas(
      environment.azureContainers.sasUrl,
      environment.azureContainers.sasToken
    );

    return new Promise((resolve) => {
      blobService.getBlobToText(
        'angulardata',
        'angular_properties.json',
        function (err, blobContent, blob) {
          resolve(JSON.parse(blobContent));
        }
      );
    });
  }
}

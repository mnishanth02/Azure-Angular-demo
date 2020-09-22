// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  azureContainers: {
    baseUrl: 'blob.core.windows.net',
    playlist: 'angularfirststorage',
    sasToken:
      '?sv=2019-12-12&ss=b&srt=sco&sp=rwdlacx&se=2020-10-30T17:03:33Z&st=2020-09-22T09:03:33Z&spr=https,http&sig=pmuePXbG%2BYzRHP2xxNrQI88UVkJUlSzT6GnvGSmEhq4%3D',
    sasUrl:
      'https://angularfirststorage.blob.core.windows.net/?sv=2019-12-12&ss=b&srt=sco&sp=rwdlacx&se=2020-10-30T17:03:33Z&st=2020-09-22T09:03:33Z&spr=https,http&sig=pmuePXbG%2BYzRHP2xxNrQI88UVkJUlSzT6GnvGSmEhq4%3D'
  },
};

//https://angularfirststorage.blob.core.windows.net/angulardata/angular_properties.json

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

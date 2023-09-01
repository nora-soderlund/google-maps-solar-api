# google-maps-solar-api
This is a TypeScript package for calling the new Solar API endpoints. Currently only DataLayers are implemented.

## Get started
```
npm install @nora-soderlund/google-maps-solar-api
```

See my developer blog article for an example of using the Solar API with the Google Maps JS SDK:

https://nora-soderlund.se/articles/integrating-the-new-solar-api-in-google-maps

## References
### getDataLayers(apiKey: string, query: GetDataLayersParameters): Promise<DataLayers>
See https://developers.google.com/maps/documentation/solar/reference/rest/v1/dataLayers/get

### getTiff(apiKey: string, url: string): Promise<ArrayBuffer>
See https://developers.google.com/maps/documentation/solar/reference/rest/v1/geoTiff/get

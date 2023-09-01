# google-maps-solar-api
This is a TypeScript package for calling the new Solar API endpoints. Currently only DataLayers are implemented.

## References
### getDataLayers(apiKey: string, query: GetDataLayersParameters): Promise<DataLayers>
See https://developers.google.com/maps/documentation/solar/reference/rest/v1/dataLayers/get

### getTiff(apiKey: string, url: string): Promise<ArrayBuffer>
See https://developers.google.com/maps/documentation/solar/reference/rest/v1/geoTiff/get

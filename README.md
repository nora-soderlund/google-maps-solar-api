# google-maps-solar-api
This is a TypeScript package for calling the new Solar API endpoints, including full types for all query inputs and body responses.

## Get started
```
npm install @nora-soderlund/google-maps-solar-api
```

See my developer blog article for an example of using the Solar API data layers with a dynamic Google Maps instance:

https://nora-soderlund.se/articles/integrating-the-new-solar-api-in-google-maps

## References

### Building Insights
#### `findClosestBuildingInsights(apiKeyOrProxyUrl: string | URL, query: FindClosestBuildingInsightsParameters): Promise<BuildingInsights>`
See https://developers.google.com/maps/documentation/solar/reference/rest/v1/buildingInsights/findClosest

### Data Layers
#### `getDataLayers(apiKeyOrProxyUrl: string | URL, query: GetDataLayersParameters): Promise<DataLayers>`
See https://developers.google.com/maps/documentation/solar/reference/rest/v1/dataLayers/get

#### `getTiff(apiKeyOrProxyUrl: string | URL, url: string): Promise<ArrayBuffer>`
See https://developers.google.com/maps/documentation/solar/reference/rest/v1/geoTiff/get

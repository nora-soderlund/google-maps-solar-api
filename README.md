# google-maps-solar-api
This is a TypeScript package for calling the new Solar API endpoints, including full types for all query inputs and body responses.

## Get started
```
npm install @nora-soderlund/google-maps-solar-api
```

### Getting building insights from a coordinate
```ts
import { findClosestBuildingInsights } from "@nora-soderlund/google-maps-solar-api";

const buildingInsights = await findClosestBuildingInsights("API_KEY", {
  location: {
    latitude: 57.70936,
    longitude: 11.97345
  }
});
```

### Getting data layers from a coordinate
```ts
import { getDataLayers } from "@nora-soderlund/google-maps-solar-api";

const dataLayers = await getDataLayers("API_KEY", {
  location: coordinate,
  radiusMeters: 100,
  view: "IMAGERY_AND_ANNUAL_FLUX_LAYERS"
});
```

### Using a proxy URL instead of API key
You can use your own Solar API proxy to implement this package in your clients and apply rate limiting or session authentication on your end.

Simply pass a URL object instead of a string in replacement of the API key. Only the host will be used, the protocol must be HTTPS.
```ts
import { findClosestBuildingInsights } from "@nora-soderlund/google-maps-solar-api";

const proxyUrl = new URL("https://my-solar-api-proxy.com");

const buildingInsights = await findClosestBuildingInsights(proxyUrl, {
  location: {
    latitude: 57.70936,
    longitude: 11.97345
  }
});
```

Subsequent request will be sent to e.g. `https://my-solar-api-proxy.com/v1/buildingInsights:findClosest?...`.

### Implementation examples
See my developer blog article for an example of using the Solar API data layers with a dynamic Google Maps instance:

https://nora-soderlund.com/articles/integrating-the-new-solar-api-in-google-maps

Another example of visualizing potential solar panel placements in dynamic maps:

https://nora-soderlund.com/articles/visualizing-potential-solar-panel-placements-in-google-maps

## References

### Building Insights
#### findClosestBuildingInsights
```ts
findClosestBuildingInsights(apiKeyOrProxyUrl: string | URL, query: FindClosestBuildingInsightsParameters): Promise<BuildingInsights>
```
Returns a [BuildingInsights](https://github.com/nora-soderlund/google-maps-solar-api/blob/main/src/types/BuildingInsights.ts) object or throws a generic Error if the request failed.

See [buildingInsights.findClosest](https://developers.google.com/maps/documentation/solar/reference/rest/v1/buildingInsights/findClosest) on the Solar API reference.

---

### Data Layers
#### getDataLayers
```ts
getDataLayers(apiKeyOrProxyUrl: string | URL, query: GetDataLayersParameters): Promise<DataLayers>
```
Returns a [DataLayers](https://github.com/nora-soderlund/google-maps-solar-api/blob/main/src/types/DataLayers.ts) object or throws a generic Error if the request failed.

See [dataLayers.get](https://developers.google.com/maps/documentation/solar/reference/rest/v1/dataLayers/get) on the Solar API reference.

---

#### `getGeoTiff(apiKeyOrProxyUrl: string | URL, url: string): Promise<ArrayBuffer>`
Returns a raw [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) object of the GeoTIFF file or throws a generic Error if the request failed.

See [geoTiff.get](https://developers.google.com/maps/documentation/solar/reference/rest/v1/geoTiff/get) on the Solar API reference.

---

### Helpers
#### getDataLayersForBounds
```ts
getDataLayersForBounds(bounds: LatLngBox, pixelSizeMeters: number, paddingMeters: number = 0): DataLayerBounds
```
Used for getting a connected area coverage. Does not perform any asynchronous requests. Returns a [DataLayerBounds](#datalayerbounds) object. 

---

#### DataLayerBounds
```ts
dataLayerView: DataLayerView;
```
The highest supported data layer view, for radius meters over 175m, the DataLayerView in the request must not include monthly flux or hourly shade.

##### tiles
```ts
tiles: LatLng[];
```
The tiles that make up the generated bounds, use with `radiusMetersPerTile`

##### radiusMetersPerTile
```ts
radiusMetersPerTile: number;
```
The radius in meters for each tile.

##### bounds
```ts
bounds: LatLngBox;
```
The generated bounds for the new tiles.

##### horizontalTiles
```ts
horizontalTiles: number;
```
##### verticalTiles
```ts
verticalTiles: number;
```
The horizontal and vertical tiles count. 

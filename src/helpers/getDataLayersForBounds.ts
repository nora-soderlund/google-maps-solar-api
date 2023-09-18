import { computeDestinationPoint, getDistance } from "geolib";
import { DataLayerView } from "../types/DataLayerView";
import { LatLngBox } from "../types/LatLngBox";
import { DataLayerBounds } from "./types/DataLayerBounds";
import { LatLng } from "../types/LatLng";

export function getDataLayersForBounds(bounds: LatLngBox, pixelSizeMeters: number, paddingMeters: number = 0): DataLayerBounds {
    const radiusMetersPerTile: number = Math.round(pixelSizeMeters * 999);
    const dataLayerView: DataLayerView = (radiusMetersPerTile >= 175)?("IMAGERY_AND_ANNUAL_FLUX_LAYERS"):("FULL_LAYERS");

    const northEast = computeDestinationPoint(computeDestinationPoint(bounds.ne, paddingMeters, 0), paddingMeters, 90);
    const southWest = computeDestinationPoint(computeDestinationPoint(bounds.sw, paddingMeters, 180), paddingMeters, 270);

    const horizontalDistance = getDistance(southWest, {
        latitude: southWest.latitude,
        longitude: northEast.longitude
    });

    const verticalDistance = getDistance(southWest, {
        latitude: northEast.latitude,
        longitude: southWest.longitude
    });

    const distancePerTile = radiusMetersPerTile * 2;

    const horizontalTiles = Math.ceil(horizontalDistance / distancePerTile);
    const verticalTiles = Math.ceil(verticalDistance / distancePerTile);

    const tiles: LatLng[] = [];

    for(let row = 0; row < verticalTiles; row++) {
        const rowNorthEast = computeDestinationPoint(northEast, distancePerTile * row, 180);

        for(let column = 0; column < horizontalTiles; column++) {
            tiles.push(
                computeDestinationPoint(rowNorthEast, distancePerTile * column, 270)
            );
        }
    }

    return {
        radiusMetersPerTile,
        distancePerTile,

        dataLayerView,

        tiles,

        bounds: {
            ne: northEast,
            sw: southWest
        },
        
        horizontalTiles,
        verticalTiles
    };
};

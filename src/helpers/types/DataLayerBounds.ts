import { DataLayerView } from "../../types/DataLayerView"
import { LatLng } from "../../types/LatLng";
import { LatLngBox } from "../../types/LatLngBox";

export type DataLayerBounds = {
    radiusMetersPerTile: number;
    distancePerTile: number;
    
    dataLayerView: DataLayerView;

    tiles: LatLng[];

    bounds: LatLngBox;
    
    horizontalTiles: number;
    verticalTiles: number;
};

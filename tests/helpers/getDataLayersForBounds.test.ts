import { getDistance } from "geolib";
import { LatLngBox, getDataLayersForBounds } from "../../src";

describe("getDataLayersForBounds", () => {
    // bounds of Nordstan in Gothenburg, Sweden
    const bounds: LatLngBox = {
        ne: {
            latitude: 57.710666,
            longitude: 11.971263
        },

        sw: {
            latitude: 57.705867,
            longitude: 11.958312
        }
    };

    describe("Should return the correct radiusMetersPerTile", () => {
        test("1.00 meters per pixel", () => {
            const { radiusMetersPerTile } = getDataLayersForBounds(bounds, 1);

            expect(radiusMetersPerTile).toBe(999);
        });

        test("0.50 meters per pixel", () => {
            const { radiusMetersPerTile } = getDataLayersForBounds(bounds, .5);

            expect(radiusMetersPerTile).toBe(500);
        });

        test("0.25 meters per pixel", () => {
            const { radiusMetersPerTile } = getDataLayersForBounds(bounds, .25);

            expect(radiusMetersPerTile).toBe(250);
        });

        test("0.10 meters per pixel", () => {
            const { radiusMetersPerTile } = getDataLayersForBounds(bounds, .1);

            expect(radiusMetersPerTile).toBe(100);
        });
    });

    test("Should return data layer view without monthly flux when radius exceeds 175 meters", () => {
        const { dataLayerView } = getDataLayersForBounds(bounds, 1);

        expect(dataLayerView).not.toBe("FULL_LAYERS");
    });
    
    describe("Should return the correct bounds", () => {
        test("No padding", () => {
            const { bounds: dataLayerBounds } = getDataLayersForBounds(bounds, 1);

            expect(dataLayerBounds.ne.latitude).toBeCloseTo(57.71066, 4);
            expect(dataLayerBounds.ne.longitude).toBeCloseTo(11.97126, 4);

            expect(dataLayerBounds.sw.latitude).toBeCloseTo(57.70586, 4);
            expect(dataLayerBounds.sw.longitude).toBeCloseTo(11.95831, 4);
        });

        test("100 meter padding", () => {
            const { bounds: dataLayerBounds } = getDataLayersForBounds(bounds, 1, 100);

            expect(dataLayerBounds.ne.latitude).toBeCloseTo(57.71156, 4);
            expect(dataLayerBounds.ne.longitude).toBeCloseTo(11.97294, 4);

            expect(dataLayerBounds.sw.latitude).toBeCloseTo(57.70496, 4);
            expect(dataLayerBounds.sw.longitude).toBeCloseTo(11.95662, 4);
        });
    });

    describe("Should return the calculated tiles", () => {
        test("Tiles should be the correct count", () => {
            const { tiles } = getDataLayersForBounds(bounds, .25);

            expect(tiles.length).toBe(4);
        });

        test("Tiles should be in a grid", () => {
            const { tiles, verticalTiles, horizontalTiles, radiusMetersPerTile, distancePerTile } = getDataLayersForBounds(bounds, .25);

            expect(tiles.length).toBe(4);
            expect(radiusMetersPerTile).toBe(250);
            expect(distancePerTile).toBe(500);

            expect.assertions((verticalTiles * horizontalTiles) + 1);

            for(let row = 1; row < verticalTiles; row++)
            for(let column = 1; column < horizontalTiles; column++) {
                const index = (row * horizontalTiles) + column;

                const previousColumnTile = tiles[index - 1];
                const previousRowTile = tiles[index - horizontalTiles];

                const tile = tiles[index];

                const nextColumnDistance = getDistance(previousColumnTile, tile, 10);
                expect(nextColumnDistance).toBeCloseTo(distancePerTile);

                const previousRowDistance = getDistance(previousRowTile, tile, 10);
                expect(previousRowDistance).toBeCloseTo(distancePerTile);
            }
        });
    });
});

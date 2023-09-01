import { Date } from "./Date";
import { ImageryQuality } from "./ImageryQuality";

export type DataLayers = {
  imageryDate: Date;
  imageryProcessedDate: Date;
  dsmUrl?: string;
  rgbUrl?: string;
  maskUrl?: string;
  annualFluxUrl?: string;
  monthlyFluxUrl?: string;
  hourlyShadeUrls?: string[];
  imageryQuality: ImageryQuality;
};
  
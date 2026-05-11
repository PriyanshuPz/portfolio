import raw from "../content/config/site.json";
import { SiteSchema } from "./schema";
export const STATE = SiteSchema.parse(raw);

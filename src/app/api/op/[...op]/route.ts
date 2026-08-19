import { createRouteHandler } from "@openpanel/nextjs/server";

// Proxies the OpenPanel script (/op1.js) and event ingestion (/track) through
// our own domain so ad blockers can't block the openpanel.dev origin.
// apiUrl overrides the upstream events API only when self-hosting; the cloud
// default (https://api.openpanel.dev) is used otherwise.
const apiUrl = process.env.NEXT_PUBLIC_OPENPANEL_API_URL || undefined;

export const { GET, POST } = createRouteHandler(apiUrl ? { apiUrl } : undefined);

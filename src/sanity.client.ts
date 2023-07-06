//
import { createClient, SanityClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    dataset: "production",
    projectId: "g014cs9v",
    useCdn: false,
    apiVersion: "2021-10-21",
};

export const client: SanityClient = createClient(config);

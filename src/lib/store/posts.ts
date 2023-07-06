import { createClient, SanityClient, type ClientConfig } from "@sanity/client";
import { writable, get } from "svelte/store";
import groq from "groq";

const config: ClientConfig = {
    dataset: "production",
    projectId: "g014cs9v",
    useCdn: false,
    apiVersion: "2021-10-21",
};

export const client: SanityClient = createClient(config);

export const posts = writable([]);
export const filteredPosts = writable([]);
export const featuredPost = writable({});

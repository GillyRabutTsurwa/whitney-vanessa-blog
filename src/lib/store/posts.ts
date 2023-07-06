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

export async function fetchPosts() {
    const query = groq`*[_type == "personal-post"]`;
    const postsArr = await client.fetch(query);
    posts.set(postsArr);
    return postsArr; //NOTE: to use in function below
}

export async function filterPosts(category) {
    const y = await fetchPosts();
    console.log(y);
    // this.filteredPosts = get(posts).filter((currentPost) => currentPost.categories.includes(category));
    const x = get(posts).filter((currentPost) => currentPost.categories.includes(category));
    filteredPosts(x); //NOTE: almost there, but not yet solved
}

fetchPosts();

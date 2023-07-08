import { createClient, SanityClient, type ClientConfig } from "@sanity/client";
import groq from "groq";

const config: ClientConfig = {
    dataset: "production",
    projectId: "0lso1pj1",
    useCdn: false,
    apiVersion: "2021-10-21",
};

export const client: SanityClient = createClient(config);

export const useFetchPosts = () => {
    async function fetchPosts() {
        const query = groq`*[_type == "post"]`;
        const posts = await client.fetch(query);
        return posts;
    }

    async function filterPosts(category: string) {
        const posts = await fetchPosts();
        return posts.filter((currentPost: object) => currentPost.categories.includes(category));
    }

    async function fetchRandomPost() {
        const posts = await fetchPosts();
        return posts[Math.floor(Math.random() * posts.length)];
    }

    return {
        fetchPosts: fetchPosts,
        filterPosts: filterPosts,
        fetchRandomPost: fetchRandomPost,
    };
};

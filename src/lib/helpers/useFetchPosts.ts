import groq from "groq";
import { client } from "@/sanity.client";

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

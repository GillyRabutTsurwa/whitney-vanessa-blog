import { writable, type Writable } from "svelte/store";

export const posts: Writable<object[]> = writable([]);
export const filteredPosts: Writable<object[]> = writable([]);
export const featuredPost: Writable<object> = writable({});

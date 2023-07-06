import imageUrlBuilder from "@sanity/image-url";
import { client } from "$lib/store/posts.js"; //NOTE: change this
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const useSanityImage = () => {
    const builder = imageUrlBuilder(client);
    const urlFor = (source: string): ImageUrlBuilder => {
        return builder.image(source);
    };
    return {
        urlFor: urlFor,
    };
};

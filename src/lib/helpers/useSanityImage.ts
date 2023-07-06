// NOTE: in the src folder, this file is properly loaded
// hors du fichier, ca marche pas
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity.client";
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

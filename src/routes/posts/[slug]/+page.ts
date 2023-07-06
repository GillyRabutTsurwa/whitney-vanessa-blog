import { error } from "@sveltejs/kit";
import { client } from "../../../lib/store/posts"; //NOTE: Change this
import groq from "groq";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const query = groq`*[_type == "personal-post" && slug.current == "${params.slug}"] {
    ...,
    author->
  }`;
    const post: object[] = await client.fetch(query); //NOTE: sanity data is weird it's an array with one object inside instead of the object outright
    return {
        post: post[0],
        test: params.slug,
    };
    // }

    throw error(404, "Not found");
}

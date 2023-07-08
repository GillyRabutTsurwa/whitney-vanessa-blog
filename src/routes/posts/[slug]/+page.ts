import { error } from "@sveltejs/kit";
import { client } from "@/sanity.client"; //NOTE: Change this
import groq from "groq";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const query = groq`*[_type == "post" && slug.current == "${params.slug}"] {
    ...,
    authour->
  }`;
    const post: object[] = await client.fetch(query); //NOTE: sanity data is weird it's an array with one object inside instead of the object outright
    return {
        post: post[0],
        test: params.slug,
    };
    // }

    throw error(404, "Not found");
}

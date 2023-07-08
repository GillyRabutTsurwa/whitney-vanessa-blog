/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    return {
        test: params.slug,
    };
    // }

    // throw error(404, "Not found");
}

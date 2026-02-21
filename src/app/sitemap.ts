import { MetadataRoute } from "next";
import { getCollections, load } from "outstatic/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl =
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const db = await load();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];

    // Get all published pages (excluding home, which is the root URL)
    const pages = await db
        .find(
            {
                collection: "pages",
                slug: { $nin: ["home"] },
                status: "published",
            },
            ["slug", "publishedAt"]
        )
        .toArray();

    const pageEntries: MetadataRoute.Sitemap = pages.map((page) => ({
        url: `${baseUrl}/${page.slug}`,
        lastModified: new Date(page.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // Get all published posts
    const posts = await db
        .find({ collection: "posts", status: "published" }, [
            "slug",
            "publishedAt",
        ])
        .toArray();

    const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/posts/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Add posts archive page if there are posts
    if (posts.length > 0) {
        staticPages.push({
            url: `${baseUrl}/posts`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        });
    }

    // Get remaining collections (e.g., projects) and their documents
    const collections = getCollections().filter(
        (c) => c !== "pages" && c !== "posts"
    );

    const collectionEntries: MetadataRoute.Sitemap = [];

    for (const collection of collections) {
        // Add collection archive page
        collectionEntries.push({
            url: `${baseUrl}/${collection}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        });

        // Add individual documents in this collection
        const docs = await db
            .find({ collection, status: "published" }, ["slug", "publishedAt"])
            .toArray();

        for (const doc of docs) {
            collectionEntries.push({
                url: `${baseUrl}/${collection}/${doc.slug}`,
                lastModified: new Date(doc.publishedAt),
                changeFrequency: "monthly" as const,
                priority: 0.6,
            });
        }
    }

    return [...staticPages, ...pageEntries, ...postEntries, ...collectionEntries];
}

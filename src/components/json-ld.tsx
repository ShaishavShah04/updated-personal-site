import React from "react";

type PersonJsonLdProps = {
    name: string;
    jobTitle: string;
    url: string;
    email?: string;
    sameAs?: string[];
};

type WebSiteJsonLdProps = {
    name: string;
    url: string;
    description: string;
};

type ArticleJsonLdProps = {
    title: string;
    description?: string;
    url: string;
    datePublished: string;
    authorName: string;
    image?: string;
};

export function PersonJsonLd({
    name,
    jobTitle,
    url,
    email,
    sameAs = [],
}: PersonJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name,
        jobTitle,
        url,
        ...(email && { email }),
        ...(sameAs.length > 0 && { sameAs }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export function WebSiteJsonLd({ name, url, description }: WebSiteJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name,
        url,
        description,
        author: {
            "@type": "Person",
            name,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export function ArticleJsonLd({
    title,
    description,
    url,
    datePublished,
    authorName,
    image,
}: ArticleJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished,
        author: {
            "@type": "Person",
            name: authorName,
        },
        ...(image && {
            image: {
                "@type": "ImageObject",
                url: image,
            },
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

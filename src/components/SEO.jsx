import { useEffect } from "react";
import profile from "../assets/emedev-logo.svg";

const BASE_URL = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ?? "";

const resolveImageUrl = (img) => {
  if (!img) return "";
  if (img.startsWith("http://") || img.startsWith("https://")) return img;
  return `${BASE_URL}${img.startsWith("/") ? "" : "/"}${img}`;
};

const SEO = ({
  title = "Emediong Jonah | Full-Stack Engineer & AI Integration Specialist",
  description = "Emediong Jonah is a full-stack software engineer specializing in backend systems, AI integration, and scalable web applications. View portfolio and projects.",
  image = profile,
  type = "website",
}) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const absoluteImage = resolveImageUrl(image);
    const canonicalUrl = window.location.href;

    const metaTags = [
      { attr: "name",     key: "description",           content: description },

      { attr: "property", key: "og:title",              content: title },
      { attr: "property", key: "og:description",        content: description },
      { attr: "property", key: "og:image",              content: absoluteImage },
      { attr: "property", key: "og:type",               content: type },
      { attr: "property", key: "og:url",                content: canonicalUrl },

      { attr: "name",     key: "twitter:card",          content: "summary_large_image" },
      { attr: "name",     key: "twitter:title",         content: title },
      { attr: "name",     key: "twitter:description",   content: description },
      { attr: "name",     key: "twitter:image",         content: absoluteImage },
    ];

    const createdTags = [];

    metaTags.forEach(({ attr, key, content }) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      const isNew = !tag;

      if (isNew) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
        createdTags.push(tag);
      }

      tag.setAttribute("content", content);
    });

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    const canonicalIsNew = !canonical;
    if (canonicalIsNew) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    return () => {
      document.title = previousTitle;
      createdTags.forEach((tag) => tag.remove());
      if (canonicalIsNew) canonical.remove();
    };
  }, [title, description, image, type]);

  return null;
};

export default SEO;
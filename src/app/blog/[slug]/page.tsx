import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticle } from "@/data/articles";
import { getService } from "@/data/services";
import BlogArticle from "@/components/BlogArticle";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Blog El Gardinero`,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `https://elgardinero.ma/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://elgardinero.ma/blog/${article.slug}`,
      siteName: "El Gardinero",
      locale: "fr_MA",
      type: "article",
      publishedTime: article.publishDate,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3)
    .map((a) => ({ slug: a.slug, title: a.title, type: "article" as const }));

  const service = article.relatedService ? getService(article.relatedService) : undefined;
  const relatedService = service ? { slug: service.slug, title: service.name, type: "service" as const } : undefined;

  return <BlogArticle article={article} relatedArticles={relatedArticles} relatedService={relatedService} />;
}

import { create } from "zustand";

interface ArticleMap {
  slug: string;
  documentId: string;
}

interface ArticlesStore {
  articlesMap: ArticleMap[];
  setArticlesMap: (map: ArticleMap[]) => void;
  findDocumentIdBySlug: (slug: string) => string | undefined;
}

export const useArticlesStore = create<ArticlesStore>((set, get) => ({
  articlesMap: [],
  setArticlesMap: (map) => set({ articlesMap: map }),
  findDocumentIdBySlug: (slug) =>
    get().articlesMap.find((article) => article.slug === slug)?.documentId,
}));

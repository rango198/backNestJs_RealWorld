import { ArticleType } from './article.type';

export interface AllArticleResponseInterface {
  articles: ArticleType[];
  articlesCount: number;
}

import { Injectable } from '@angular/core';
import { Article, articles } from './home/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getArticles(): Article[] {
    return articles;
  }
}

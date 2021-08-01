import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from './articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public articles!: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articles = this.articleService.getArticles();
  }
}

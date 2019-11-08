import { Post } from './../models/post.model';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  arrPosts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts()
      .then((posts) => {
        this.arrPosts = posts;
      });
  }

  manejarSelect($event) {
    this.postsService.getPostsByCat($event.target.value)
      .then((arrFiltrado) => {
        this.arrPosts = arrFiltrado;
      });
  }

}

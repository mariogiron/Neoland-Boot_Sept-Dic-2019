import { Post } from './models/post.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[];

  constructor() {
    if (localStorage.getItem('postsblog')) {
      this.posts = JSON.parse(localStorage.getItem('postsblog'));
    } else {
      this.posts = [];
    }
  }

  agregarPost(pPost): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.posts.push(pPost);
      resolve('Inserción correcta');
    });
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      resolve(this.posts);
    });
  }

  getPostsByCat(pCategoria: string): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      const arrFiltrado = this.posts.filter((item) => {
        return item.categoria === pCategoria;
      });
      resolve(arrFiltrado);
    });
  }

  guardarPosts() {
    localStorage.setItem('postsblog', JSON.stringify(this.posts));
  }

}

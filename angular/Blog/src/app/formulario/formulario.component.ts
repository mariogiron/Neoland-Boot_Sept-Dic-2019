import { Post } from './../models/post.model';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private postsService: PostsService) {
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl(''),
      autor: new FormControl(''),
      imagen: new FormControl(''),
      categoria: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.formulario.value.fecha = new Date();
    const p = new Post(this.formulario.value);
    this.postsService.agregarPost(p).then((mensaje) => {
      this.postsService.guardarPosts();
      alert(mensaje);
    });
  }

}

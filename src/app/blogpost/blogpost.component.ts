import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BlogpostService } from './blogpost.service';
import { NgControlStatus } from '@angular/forms';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit, OnDestroy {
  data: Date = new Date();

  focus;
  blog;

  constructor(private route: ActivatedRoute, private blogpostService: BlogpostService) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get("id");
      this.blogpostService.getBlogPost(id).subscribe(data => {

        let item = data.payload.data();
        console.log(item)
        this.blog = item;
      });

    var rellaxHeader = new Rellax('.rellax-header');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('blog-post');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('blog-post');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}

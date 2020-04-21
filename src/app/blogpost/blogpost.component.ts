import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BlogpostService } from './blogpost.service';
import { NgControlStatus } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit, OnDestroy {
  data: Date = new Date();

  focus;
  blog;

  constructor(private route: ActivatedRoute, private blogpostService: BlogpostService,     private storage: AngularFireStorage) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get("id");
    let storage = this.storage;
      this.blogpostService.getBlogPost(id).subscribe(data => {

        let item = data.payload.data();
        const ref = storage.ref(item["mainImageUrl"]);
        ref.getDownloadURL().subscribe((data) => {
          item["mainImageUrl"] = data;
        });

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

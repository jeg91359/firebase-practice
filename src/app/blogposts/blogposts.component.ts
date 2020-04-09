import { Component, OnInit } from "@angular/core";
import { BlogpostsService } from "./blogposts.service";
import * as Rellax from "rellax";
import { Router } from '@angular/router';

@Component({
  selector: "app-blogposts",
  templateUrl: "./blogposts.component.html",
  styleUrls: ["./blogposts.component.scss"],
})
export class BlogpostsComponent implements OnInit {
  data: Date = new Date();
  focus;
  items = [];

  constructor(public blogpostsService: BlogpostsService, private router: Router) {}

  ngOnInit() {
    
    this.blogpostsService.getBlogPosts().subscribe(data => {
      let items = [];
        data.forEach(function (doc) {
          let item = doc.payload.doc.data();
          item['id'] = doc.payload.doc.id;
          items.push(item);
        });
        this.items = items;
      });


    var rellaxHeader = new Rellax(".rellax-header");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("blog-posts");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("blog-posts");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }


  goToBlogPost(id: String)
  {
    console.log(id);
    this.router.navigate(['blogpost/' + id]);
  }
}

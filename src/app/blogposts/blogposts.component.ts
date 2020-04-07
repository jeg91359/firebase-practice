import { Component, OnInit } from "@angular/core";
import { BlogpostsService } from "./blogposts.service";
import * as Rellax from "rellax";

@Component({
  selector: "app-blogposts",
  templateUrl: "./blogposts.component.html",
  styleUrls: ["./blogposts.component.scss"],
})
export class BlogpostsComponent implements OnInit {
  data: Date = new Date();
  focus;
  items: any;

  constructor(public blogpostsService: BlogpostsService) {}

  ngOnInit() {
    this.blogpostsService
      .getItems()
      .toPromise()
      .then((data) => {let items = [];
        data.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          items.push(doc.data());
        });
        this.items = items;
        console.log(items);
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
}

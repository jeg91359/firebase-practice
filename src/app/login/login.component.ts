import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  providers = AuthProvider;

  constructor(private router: Router,  private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSuccess()
  {
    this.router.navigate(['/']);
  }

}

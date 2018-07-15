import { Component, ViewEncapsulation , OnInit} from '@angular/core';
import { AuthService } from './modules/authentication/services/auth.service';
import { Router , ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.router.navigate(['authentication', 'login'] );
    }
  }


}

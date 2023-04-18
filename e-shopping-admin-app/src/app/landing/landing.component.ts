import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {

  flag!: boolean;
  pathCheck = false;

  constructor(public authService: AuthService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe({
      next: (result: any) => {
        console.log('login check ===', result);
        this.flag = result;
      }
    })

  }

  ngAfterViewChecked() {
    if (window.location.pathname === '/home') {
      this.pathCheck = true;
    } else {
      this.pathCheck = false;
    }
    console.log('pathCheck ===', this.pathCheck);
    this.cdr.detectChanges();
  }

}

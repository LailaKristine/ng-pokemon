import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  get user(): User | undefined{
    return this.userService.user;
  }

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
  }

}

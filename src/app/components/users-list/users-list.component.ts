import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/store/users/users.reducer';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() usersList$
  @Input() searchFilter: string
  
  constructor() { }

  ngOnInit(): void {}

}

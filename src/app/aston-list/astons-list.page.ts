import { Component, OnInit } from '@angular/core';
import { AstonService } from '../service/aston.service';

@Component({
  selector: 'app-astons-list',
  templateUrl: './astons-list.page.html',
  styleUrls: ['./astons-list.page.scss'],
})
export class AstonsListPage implements OnInit {

  astons!: any;
  constructor(
    private Aston: AstonService
  ) { }

  ngOnInit(): void {
    this.Aston.getAllAstons().subscribe((data: any) => {
      this.astons = data;
    })
  }

}

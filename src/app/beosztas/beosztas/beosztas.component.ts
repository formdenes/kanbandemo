import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beosztas',
  templateUrl: './beosztas.component.html',
  styleUrls: ['./beosztas.component.scss']
})
export class BeosztasComponent implements OnInit {

  stage?: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.stage = this.router.url.split('?')[0].split('/').pop();
  }

}

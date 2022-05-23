import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beosztas',
  templateUrl: './beosztas.component.html',
  styleUrls: ['./beosztas.component.scss']
})
export class BeosztasComponent implements OnInit {

  stage?: string;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params['stage']);
      this.stage = params['stage'];
    });
  }

}

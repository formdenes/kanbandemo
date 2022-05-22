import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JeloltClass } from '../jelolt.model';
import { JeloltService } from '../jelolt.service';

@Component({
  selector: 'app-jelolt',
  templateUrl: './jelolt.component.html',
  styleUrls: ['./jelolt.component.scss']
})
export class JeloltComponent implements OnInit {

  id?:string;
  jelolt?: any;
  headers:string[] = Object.keys(new JeloltClass());

  constructor(public router: Router, private jeloltService: JeloltService) { }

  ngOnInit(): void {
    // console.log(this.router.parseUrl(this.router.url).root.children.);
    
    this.id = this.router.url.split('?')[0].split('/').pop();
    this.jeloltService.getJeloltById(this.id!).subscribe(snapshot => {
      this.jelolt = snapshot.data();
      console.log(this.jelolt);
      
    })
  }

}

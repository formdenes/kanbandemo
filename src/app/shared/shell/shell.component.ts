import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BeosztasService } from 'src/app/beosztas/beosztas.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit{

  stages: string[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth,
    private beosztasService: BeosztasService
  ) {}

  ngOnInit(): void {
    this.beosztasService.getStages().subscribe(snapshot => {
      // this.stages = snapshot.data();
      // console.log(snapshot.data());
      snapshot.forEach(doc => {
        const data: any = doc.data();
        if (Object.keys(data).indexOf('2022') !== -1){
          this.stages = data['2022'];
        }
      });
    });
  }

}
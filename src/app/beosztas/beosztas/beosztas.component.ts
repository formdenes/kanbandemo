import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JeloltClass } from 'src/app/jeloltek/jelolt.model';
import { JeloltService } from 'src/app/jeloltek/jelolt.service';

@Component({
  selector: 'app-beosztas',
  templateUrl: './beosztas.component.html',
  styleUrls: ['./beosztas.component.scss']
})
export class BeosztasComponent implements OnInit {

  stage?: string;
  stageValues: string[] = [];
  stageData: any = {};
  headers:string[] =  ['teljes név'];
  jeloltek: any[] = [];
  closed: string[] = [];

  constructor(public route: ActivatedRoute, private jeloltService: JeloltService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params['stage']);
      this.stage = params['stage'];
      this.jeloltService.getJelolts().subscribe(snapshot => {
        this.stageValues = [];
        this.stageData = {};
        this.jeloltek = [];
        snapshot.forEach(doc => {
          const data: any = doc.data();
          this.jeloltek.push(data);
          let stageValue = data[this.stage!];
          // console.log(data, this.stage, stageValue);
          stageValue = stageValue === "" ? "szabad" : stageValue;
          
          if (this.stageValues.indexOf(stageValue) === -1) {
            this.stageValues.push(stageValue);
            // console.log(this.stageData);
            
            this.stageData[stageValue] = [];
            // console.log(stageValue);
          }
          this.stageData[stageValue].push(data);
        });
        // console.log(this.stageValues);
        // console.log(this.stageData);
        
      })
    });
  }

  jeloltDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // console.log(event, event.container);
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  panelClosed(name: string) {
    this.closed.push(name);
  }
  panelOpened(name: string) {
    this.closed.splice(this.closed.indexOf(name), 1);
  }
  closedClass(name: string): string {
    return this.closed.indexOf(name) === -1? '' : ' closed-panel';
    // console.log('here');
    
  }
  
  onColumnsChanged(columns: string[]){
    this.headers = columns;
  }

  getCount(stage: string, gender?: string): number{
    let filteredJeloltek: any[] = [];
    stage = stage === 'szabad'? '' : stage;
    if (gender) filteredJeloltek = this.jeloltek.filter( jelolt => jelolt[this.stage!] === stage && jelolt['nem'].toLowerCase() === gender.toLowerCase());
    else filteredJeloltek = this.jeloltek.filter( jelolt => jelolt[this.stage!] === stage);
    // console.log(stage, gender, filterdJeloltek);
    
    return filteredJeloltek.length;
  }

  getAvarageAge(stage: string, gender?: string):number {
    stage = stage === 'szabad'? '' : stage;
    let age = 0;
    let filteredJeloltek = [];
    if (gender) filteredJeloltek = this.jeloltek.filter( jelolt => jelolt[this.stage!] === stage && jelolt['nem'].toLowerCase() === gender.toLowerCase());
    else filteredJeloltek = this.jeloltek.filter( jelolt => jelolt[this.stage!] === stage);
    filteredJeloltek.forEach(jelolt => age += 2022 - parseInt(jelolt['születés év']));
    return age === 0? 0 : age/filteredJeloltek.length;
  }
}

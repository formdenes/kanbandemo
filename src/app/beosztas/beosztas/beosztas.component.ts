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
  headers:string[] =  Object.keys(new JeloltClass());

  constructor(public route: ActivatedRoute, private jeloltService: JeloltService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params['stage']);
      this.stage = params['stage'];
      this.jeloltService.getJelolts().subscribe(snapshot => {
        this.stageValues = [];
        this.stageData = {};
        snapshot.forEach(doc => {
          const data: any = doc.data();
          const stageValue = data[this.stage!];
          // console.log(data, this.stage, stageValue);
          
          if (this.stageValues.indexOf(stageValue) === -1) {
            this.stageValues.push(stageValue);
            // console.log(this.stageData);
            
            this.stageData[stageValue] = [];
            // console.log(stageValue);
          }
          this.stageData[stageValue].push(data[this.headers[0]]);
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
  
}

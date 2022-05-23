import { Component } from '@angular/core';
import { Jelolt, JeloltClass } from '../jelolt.model';
import { JeloltService } from '../jelolt.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  fileName: string = '';
  file?: File;

  constructor(private jeloltService: JeloltService) { }

  onFileSelected(event:any) {

    this.file = event.target.files[0];

    if (this.file) {
      this.fileName = this.file.name;
    }
  }

  async uploadJeloltek() {
    const fileContent = await this.readFileContent(this.file);
    // console.log(fileContent);
    
    let json = this.csvToJSON(fileContent);
    // console.log(json);
    try{
      this.jeloltService.addJelolts(json);
    } catch (err) {
      console.log(err);
      
    }
  }

  readFileContent(file?: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        if (!file) {
            resolve('');
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const text = reader.result!.toString();
            resolve(text);

        };

        reader.readAsText(file!, 'UTF-8');
    });
  }

  csvToJSON(data: string) {
    const array = data.split("\n");
    let result = [];
    
    let headers:string[] = Object.keys(new JeloltClass());
    for (let i = 1; i < array.length; i++) {
      let obj: any = {};
      let str = array[i];
      if ( str === "" ) break;
           
      let properties = str.split(';');
      
      for (let j = 0; j < headers.length; j++ ) obj[headers[j]] = properties[j];
      
      result.push(obj);
    }
    
    return result;
  }

}

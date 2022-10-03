import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { ListComponent } from './ongs/list/list.component';
import { OngsComponent } from './ongs/ongs.component';
//import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abmUsers';

constructor(private router:Router){}

List(){
  this.router.navigate(["list"]);
}

singleOng(){
  this.router.navigate(["singleOng"]);
}

  //cssUrl: string;
  //constructor(public sanitizer: DomSanitizer){
  //this.cssUrl ='./ong/ong.component.ts';}


}

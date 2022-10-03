import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ong } from '../Ong';
import { OngsService } from '../ongs.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ongs!: Ong[];

  constructor(private service: OngsService, private router:Router ) { }

  ngOnInit() {
    this.service.getList()
  .subscribe(data=>{
  this.ongs=data;
  })
  }

  List(){
    this.router.navigate(["list"]);
  }
  
  

}
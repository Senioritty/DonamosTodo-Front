import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngsService } from '../ongs.service';
import { Ongs } from '../ongs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ongs!:Ongs[];

  constructor(private service: OngsService, private router:Router ) { }

  ngOnInit(): void {
this.service.getOngs()
  .subscribe(data=>{
  this.ongs=data;
 })

  }

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngsService } from '../ongs.service';
import { Ongs } from '../ongs';

@Component({
  selector: 'app-singleOng',
  templateUrl: './singleOng.component.html',
  styleUrls: ['./singleOng.component.css']
})
export class SingleOngComponent implements OnInit {

  ongs!:Ongs[];

  constructor(private service: OngsService, private router:Router ) { }

  ngOnInit(): void {
this.service.getSingleOng()
  .subscribe(data=>{
  this.ongs=data;
 })

  }

}
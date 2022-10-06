import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ongs } from 'src/app/ongs/ongs';
import { OngsService } from 'src/app/ongs/ongs.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  ongs!: Ongs[];

  constructor(private service: OngsService, private router:Router ) { }

  ngOnInit(): void {
    this.service.getListar()
  .subscribe(data=>{
  this.ongs=data;
  })
  }

  Listar(){
    this.router.navigate(["listar"]);
  }
  
  

}

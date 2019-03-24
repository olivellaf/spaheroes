import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSelected: EventEmitter<number>; // must to specify type of what we are going to emit

  constructor( private router: Router ) {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  seeMoreAboutHeroe(){
    //console.log(this.index);
    this.router.navigate( ['/heroe', this.index] );
    // this.heroeSelected.emit( this.index );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  casaURL: string = '';

  constructor( private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {

      // is better to use params['id'] than params.id
      // use id, because is the param name used in app.routes.t
      this.heroe = _heroesService.getHeroe(params['id']);
      this.casaURL = 'assets/img/logo-' + this.heroe.casa.toUpperCase() + '.png';
    });

  }

  ngOnInit() {
  }

}

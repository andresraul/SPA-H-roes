import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';





@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  busqueda: any = [];
  termino: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
  
      this.busqueda = this.heroesService.buscarHeroes(params.termino);
      this.termino = params.termino;
      console.log(this.busqueda);
  
      })
  }

  ngOnInit() {
    

  }

}

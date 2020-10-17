import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent /* implements OnDestroy */ {

  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     name: 'Juego 1',
  //     value: 20
  //   },
  //   {
  //     name: 'Juego 2',
  //     value: 25
  //   },
  //   {
  //     name: 'Juego 3',
  //     value: 15
  //   },
  //   {
  //     name: 'Juego 4',
  //     value: 30
  //   }
  // ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  // According to the course.
  colorScheme = 'nightLights';

  intervalo;

  constructor() {

    // let intervalo = setInterval(() => {
    //   console.log('tick');

    //   // Need according to chants documentation
    //   const newResults = [...this.results];

    //   // tslint:disable-next-line: forin
    //   for (const i in newResults) {
    //     // We need a number greater than 1. We use 500 as example.
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }

    //   // Need according to chants documentation
    //   this.results = [...newResults];

    // }, 1500);

  }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalo);
  // }

  onSelect(event) {
    console.log(event);
  }

}

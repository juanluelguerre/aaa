import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
      .pipe(
        map((resp: Game[]) => {

          // Option (1)
          // return resp.map(({ name, votos }) => ({ name, value: votos }))

          // Option (2)
          return resp.map(juego => {
            return {
              name: juego.name,
              value: juego.votos
            };
          });
        })
      )
      .subscribe(juegos => {

        // Require allow permission on firestore. For this sample, allo "read" for everyone
        // console.log(juegos);
        this.juegos = juegos;

      });
  }

}

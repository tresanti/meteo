import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ServicesService } from '../services.service';
import * as actions from '../store/meteo.actions';
import { MeteoState } from './meteo.reducer';

@Injectable()
export class MeteoEffects {

  loadMeteo$ = createEffect(() => this.actions$.pipe(
    ofType(actions.citta),
    mergeMap(action => this.service.getMeteoOggi(action.citta)
      .pipe(
        map(result => { return(actions.cittaSuccess(result))}),
        catchError(() => {alert('Nessuna città trovata');return EMPTY;})
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private service: ServicesService
  ) {}
}
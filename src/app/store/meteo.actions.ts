import { createAction, props } from '@ngrx/store';
import { MeteoState } from './meteo.reducer';

export const citta=createAction(
    "Ottieni Citta",
    props<{citta:string}>()
);
export const cittaSuccess = createAction(
    "Ottieni Citta Success",
    props<any>()
);
export const cittaFail = createAction(
    "Ottieni Citta Fail",
    props<any>()
);
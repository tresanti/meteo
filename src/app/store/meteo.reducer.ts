import { state } from '@angular/animations';
import { Action,createReducer, on } from '@ngrx/store';
import * as actions from '../store/meteo.actions';

export interface MeteoState{
    gradi:number,
    citta:string,
    umidita:number,
    pressione:number,
    visibilita:number,
    vento:number,
    icon:string,
    descrizione:string,
    sys:string,
    img:string
}
export const initState:MeteoState={
    gradi:0,
    citta:"",
    umidita:0,
    pressione:0,
    visibilita:0,
    vento:0,
    icon:"",
    descrizione:"",
    sys:"",
    img:""
};
const _meteoReducer = createReducer(
    initState,
    on(actions.citta,(state)=>({...state})),
    on(actions.cittaSuccess,(state,result)=>({...state,
        citta:result[0].name,
        gradi:(result[0]['main'].temp - 273.15),
        umidita:result[0]['main'].humidity,
        pressione:result[0]['main'].pressure,
        visibilita:result[0].visibility,
        vento:result[0]['wind'].speed,
        icon:result[0]['weather'][0].icon,
        descrizione:result[0]['weather'][0].description,
        sys:result[0]['sys'].country,
        img:`https://maps.google.it/maps?hl=it&ie=UTF8&q=${result[0]['coord']['lat']},${result[0]['coord']['lon']}&z=10&output=embed&t=k`
    })),
    on(actions.cittaFail,(state)=>({...state,
        citta:"",
        gradi:0,
        umidita:0,
        pressione:0,
        visibilita:0,
        vento:0,
        icon:"",
        descrizione:"",
        sys:"",
        img:""
    })),
);
export function meteoReducer(state: any | undefined, action: Action) {
    return _meteoReducer(state, action);
  }
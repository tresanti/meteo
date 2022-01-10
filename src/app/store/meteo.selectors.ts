import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MeteoState } from './meteo.reducer';

export const meteo = createFeatureSelector('meteo');

export const citta = createSelector(
    createFeatureSelector('meteo'),
    (state:MeteoState)=>{return `${state.citta}`}
);
export const gradi = createSelector(
    createFeatureSelector('meteo'),
    (state:MeteoState)=>{return `${state.gradi.toFixed(0)}`}
);
export const icon = createSelector(
    createFeatureSelector('meteo'),
    (state:MeteoState)=>{return `https://openweathermap.org/img/wn/${state.icon}@2x.png`}
);
export const vento = createSelector(
    createFeatureSelector('meteo'),
    (state:MeteoState)=>{return state.vento}
);
export const pressione = createSelector(
    createFeatureSelector('meteo'),
    (state:MeteoState)=>{return state.pressione}
);
export const umidita = createSelector(
    createFeatureSelector('meteo'),
    (state:MeteoState)=>{return state.umidita}
);
export const visibilita = createSelector(
    createFeatureSelector('meteo'),
    (state:MeteoState)=>{return state.visibilita}
);
export const descrizione = createSelector(
    createFeatureSelector('meteo'),
    (state:MeteoState)=>{return `${state.descrizione?state.descrizione[0].toUpperCase()+state.descrizione.slice(1):""}`}
);
export const country = createSelector(
    createFeatureSelector('meteo'),
    (state:MeteoState)=>{return `${state.sys}`}
);
export const image = createSelector(
    createFeatureSelector('meteo'),
    (state:MeteoState)=>{ return state.img}
);
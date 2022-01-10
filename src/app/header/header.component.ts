import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ServicesService } from '../services.service';
import { MeteoState } from '../store/meteo.reducer';
import * as actions from '../store/meteo.actions';
import { citta, country, descrizione, gradi, icon, pressione, umidita, vento, visibilita} from '../store/meteo.selectors';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
citta$:Observable<string>=this.store.pipe(select(citta));
citta!:string;
gradi$:Observable<string>=this.store.pipe(select(gradi));
icon$:Observable<string>=this.store.pipe(select(icon));
descrizione$:Observable<string>=this.store.pipe(select(descrizione));
country$:Observable<string>=this.store.pipe(select(country));
visibilita$:Observable<number>=this.store.pipe(select(visibilita));
vento$:Observable<number>=this.store.pipe(select(vento));
pressione$:Observable<number>=this.store.pipe(select(pressione));
umidita$:Observable<number>=this.store.pipe(select(umidita));
form=new FormGroup(
  {cerca:new FormControl('')}
);
oggi=Date.now();
  constructor(private store:Store<MeteoState>) {
    
   }
  
  ngOnInit(): void {
    this.citta$.forEach((e:any)=>this.citta=e);
  }
   getMeteoDay(){;
    this.store.dispatch(actions.citta({citta:this.form.value.cerca}));
    this.form.setValue({cerca:""});
  }
  onSubmit(){
    this.getMeteoDay();
  }
}

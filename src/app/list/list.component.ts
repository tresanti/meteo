import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { select, State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MeteoState } from '../store/meteo.reducer';
import { image } from '../store/meteo.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
img$:Observable<string>=this.store.pipe(select(image));
urlImage!:SafeUrl;
@Output() linkImmagine = new EventEmitter<string>();
  constructor(private elementRef: ElementRef,private store:Store<MeteoState>,private state:State<MeteoState>,private sanitizer: DomSanitizer) { }

  ngOnInit() {
   this.urlImage = this.sanitizer.bypassSecurityTrustResourceUrl(this.state.value['meteo']['img']);
   this.changeImage();
  }
  changeImage(){
    const app =this.elementRef.nativeElement.ownerDocument.getElementsByClassName('app');
    for(var i=0; i<app.length; i++) {
      app[i].style.backgroundImage = `url(${this.urlImage})`;
    }
  }

}

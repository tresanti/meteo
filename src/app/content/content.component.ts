import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
@Input() vento!:number | null;
@Input() visibilita!:number | null;
@Input() pressione!:number | null;
@Input() umidita!:number | null;
  constructor() { }

  ngOnInit(): void {
    
  }

}

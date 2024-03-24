import { Component } from '@angular/core';
import { Monedas } from '../Models/monedas.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-moneda',
  standalone: true,
  imports: [FormsModule,CommonModule,MatInputModule,MatSelectModule,MatFormFieldModule],
  templateUrl: './moneda.component.html',
  styleUrl: './moneda.component.css'
})

export class MonedaComponent {

  cantidad:number = 1;
  tengo:string = 'USD';
  quiero:string = 'EUR';

  total:number = 0;

  monedas: Array<Monedas> =[
    {name: 'USD', desc: 'Us Dolar'},
    {name: 'EUR', desc: 'Euro'},
    {name: 'LIBRA', desc: 'Libra'}
  ]

  constructor() { }

  ngOnInit(): void {
    this.convertir();
  }

  convertir():void{

    switch(this.tengo){
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }else if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.87;
        }else if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.74;
        }
        break;
      case 'EUR':
        if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }else if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.16;
        }else if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.86;
        }
        break;
      case 'LIBRA':
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad;
        }else if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.35;
        }else if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.17;
        }
        break;
    }

  }

}

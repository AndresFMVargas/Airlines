import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { AirlineapiService } from '../api/airlineapi.service';
import { City } from '../Models/ciudades.interface';
import { MonedaComponent } from '../moneda/moneda.component';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule,CommonModule,MonedaComponent],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})

export class FlightSearchComponent {



  cities: City[] = [
    { name: 'Bogotá', value: ['BOG'] },
    { name: 'Medellín', value: ['MED'] },
    { name: 'Cali', value: ['CAL'] },
    { name: 'Barranquilla', value: ['BAQ'] },
    { name: 'Cartagena', value: ['CTG'] },
    { name: 'Cúcuta', value: ['CUC'] },
    { name: 'Bucaramanga', value: ['BGA'] },
    { name: 'Pereira', value: ['PEI'] },
    { name: 'Santa Marta', value: ['SMR'] },
    { name: 'Ibagué', value: ['IBE'] },
    { name: 'Villavicencio', value: ['VVC'] },
    { name: 'Valledupar', value: ['VUP'] },
    { name: 'Neiva', value: ['NVA'] },
    { name: 'Montería', value: ['MTR'] },
    { name: 'Pasto', value: ['PSO'] },
    { name: 'Manizales', value: ['MZL'] },
    { name: 'Armenia', value: ['AXM'] },
    { name: 'Popayán', value: ['PPN'] },
    { name: 'Sincelejo', value: ['SIN'] },
    { name: 'Tunja', value: ['TUN'] },
    { name: 'Riohacha', value: ['RCH'] },
    { name: 'Florencia', value: ['FLA'] },
    { name: 'Quibdó', value: ['UIB'] },
    { name: 'Arauca', value: ['AUC'] },
    { name: 'Yopal', value: ['YOP'] },
    { name: 'Puerto Carreño', value: ['PCR'] },
    { name: 'Mocoa', value: ['MCX'] },
    { name: 'San Andrés', value: ['ADZ'] },
    { name: 'San José del Guaviare', value: ['SJE'] },
    { name: 'Mitú', value: ['MVP'] },
    { name: 'Leticia', value: ['LET'] }
  ];

  selectedOrigin: string | undefined;
  selectedDestination: string | undefined;
  data :string = "";

  constructor(private service:AirlineapiService ){
  }

  ngOnInit() {
    this.service.getConsulta().subscribe((resp:any) =>{
      this.data= resp[0].title
      console.log(this.data)
    })
  }

}

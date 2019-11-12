import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // const palabras = value.split(' ');
    // const palabrasCap = [];
    // for (let i = 0; i < palabras.length; i++) {
    //   const palabra = palabras[i];
    //   const primerChar = palabra[0].toUpperCase();
    //   const restoCadena = palabra.substring(1).toLowerCase();
    //   const nuevaPalabra = primerChar + restoCadena;
    //   palabrasCap.push(nuevaPalabra);
    // }
    // const nuevaFrase = palabrasCap.join(' ');
    // return nuevaFrase;

    const palabras = value.split(' ');
    const palabrasCap = [];
    for (const palabra of palabras) {
      const nuevaPalabra = `${palabra[0].toUpperCase()}${palabra.substring(1).toLowerCase()}`;
      palabrasCap.push(nuevaPalabra);
    }
    return palabrasCap.join(' ');

    return value.split(' ').map(item => item[0].toUpperCase() + item.substring(1).toLowerCase()).join(' ');
  }

}

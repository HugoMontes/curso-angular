// Importar modulos de Pipe
import {Pipe, PipeTransform} from '@angular/core';
// Agregar el decorador @Pipe que permite ponerle el nombre al pipe
@Pipe({ name: 'conversor' })
// Crear la clase e implementar PipeTransform
export class ConversorPipe implements PipeTransform{
  // Implementar el metodo transform() donde se ejecutara toda la logica de la pipe
  transform(valorA, valorB){
    let a=parseInt(valorA);
    let b=parseInt(valorB);
    let c=valorA*valorB;
    let result='El producto: '+a+' x '+b+'='+c;
    return result;
  }
}

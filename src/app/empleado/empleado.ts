export class Empleado{
  /*
  public nombre:string;
  public edad:number;
  public cargo:string;
  public contratado:boolean;

  constructor(nombre, edad, cargo, contratado){
    this.nombre=nombre;
    this.edad=edad;
    this.cargo=cargo;
    this.contratado=contratado;
  }
  */
  // El siguiente codigo reemplaza al anterior comentado
  // Definimos atributos y constructor
  constructor(
    public nombre:string,
    public edad:number,
    public cargo:string,
    public contratado:boolean
  ){}
}

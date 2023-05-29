import{Column,Entity,PrimaryGeneratedColumn,OneToMany}from 'typeorm';
import { Nota } from 'src/notas/entities/nota.entity';
import { Inscripcion } from 'src/inscripciones/entities/inscripcion.entity';
@Entity()
export class Materia{
    @PrimaryGeneratedColumn()
    sigla:string;
    @Column()
    nombre:string;
    @Column()
    creditos:number;
    @Column()
    departamento:string;
    @OneToMany(()=>Nota,(nota)=>nota.sigla)
    nota:Nota[]
    @OneToMany(()=>Inscripcion,(inscripcion)=>inscripcion.sigla)
    inscripcion:Inscripcion[]
}
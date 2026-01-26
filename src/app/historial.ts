import { Motivo } from "./motivo";
import { Persona } from "./Persona";

export class Historial {
    constructor(
        public historialId: number,
        public notes: string,
        public persona : Persona,
        public motivo : Motivo,
        public timeStamp : Date,
        ){}
}

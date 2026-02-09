export class ItemMusical {
    id: number;
    titulo: string;
    artista: string;
    genero: string;
    imagen: string;
    tipo: string; // album o artista

    constructor(data: any) {
        this.id = data.id;

        this.titulo = data.titulo || data.nombre;
        this.artista = data.artista || "Artista Independiente";
        this.genero = data.genero || "Género no especificado";
        this.imagen = data.imagen;
        this.tipo = data.tipo;
    }

    // Unifico los métodos en uno que sea descriptivo
    get infoResumida(): string {
        return `${this.titulo} - ${this.artista} (${this.genero})`;
    }
}
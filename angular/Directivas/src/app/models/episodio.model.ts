export class Episodio {

    title: string;
    director: string;

    constructor(pTitle, pDirector) {
        this.title = pTitle;
        this.director = pDirector;
    }

    mostrarEpisodio() {
        return `Episodio: ${this.title}, dirigido por ${this.director}`;
    }

}

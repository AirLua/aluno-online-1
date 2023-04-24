class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA(mediaFinal) {

        const mediaFinalToNum = Number(mediaFinal);

        switch (true) {
            case (mediaFinalToNum === 0):
                return 'SR';
            case (mediaFinalToNum < 3):
                return 'II';
            case (mediaFinalToNum < 5):
                return 'MI';
            case (mediaFinalToNum < 7):
                return 'MM';
            case (mediaFinalToNum < 9):
                return 'MS';
            case (mediaFinalToNum <= 10):
                return 'SS'
            default: 
                return 'Erro'
        };
    }
}

module.exports = Nota;
const alunos2 = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
];

const orderBy = <T extends Record<string, unknown>>(array: T[], ...chaves: (keyof T)[]): Record<string, unknown>[] => {
    const newArr = array.map((obj) => {

        let newObj = {};

        chaves.forEach((chave) => {
            (newObj as T)[chave] = obj[chave];
        });

        return newObj;
    });

    newArr.sort((a, b) => {
        if ((a as T)[chaves[0]] > (b as T)[chaves[0]]) {
            return 1
        } else if ((a as T)[chaves[0]] < (b as T)[chaves[0]]) {
            return -1
        } else {
            return 0
        }
    })

    return newArr;
};


console.log(orderBy(alunos2, 'nota', 'nome'));
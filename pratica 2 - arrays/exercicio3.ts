const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
];

const pick = <T extends Record<string, unknown>>(array: T[], ...chaves: (keyof T)[]): Record<string, unknown>[] => {
    const newArr = array.map((obj) => {
        
        let newObj = {};
        
        chaves.forEach((chave) => {
            (newObj as T)[chave] = obj[chave];
        });

        return newObj;
    });

    return newArr;
  };


pick(alunos, 'nome', 'nota');
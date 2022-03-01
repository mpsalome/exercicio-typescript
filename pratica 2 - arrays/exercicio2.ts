const meses = ['jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez'];

const corrigeMeses = (arr: string[]): string[] => {
    let newArr = arr.filter(function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    })

    newArr.splice(1, 0, 'fev')
    newArr.splice(4, 0, 'mai')
    newArr.splice(7, 0, 'ago')
    newArr.splice(10, 0, 'ago')

    return newArr
}

console.log(corrigeMeses(meses))
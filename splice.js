

const receitas = [
    {
        id: 0,
        titulo: "queijo",
        dificuldade: 'medio',
        ingredientes: ['farinha', 'fermento', 'ovo', 'queijo'],
    },

    {
        id: 1,
        titulo: "queijo",
        dificuldade: 'medio',
        ingredientes: ['farinha', 'fermento', 'ovo', 'queijo'],
    },
]

receitas.splice(0, 1)
console.log(receitas)
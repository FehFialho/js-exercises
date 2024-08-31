//Acessando propriedades de objetos.
let catalogo = [
    {id:1, desc:"Celular", categoria:"eletronico"},
    {id:2, desc:"Televisão", categoria:"eletronico"},
    {id:3, desc:"Panela", categoria:"objeto"},
    {id:4, desc:"NoteBook", categoria:"eletronico"},
    {id:5, desc:"Chuveiro", categoria:"eletrodomestico"},
    {id:6, desc:"Geladeira", categoria:"eletrodomestico"},
    {id:7, desc:"Peneira", categoria:"objeto"}
]

//Criando função reutilizável para filtrar categorias específicas.
function filtrarCategoria(item, categoriaEscolhida) {
    return item.categoria === categoriaEscolhida;
}

// Usando a função filtrarCategoria como callback dentro do filter.
let eletronicos = catalogo.filter(item => filtrarCategoria(item, 'eletronico'));
console.log(eletronicos);

// Aprendendo a utilizar map().
let catalogoCompleto = catalogo.map(item => item.desc);
console.log(catalogoCompleto);
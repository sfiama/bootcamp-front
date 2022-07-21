let products = require('./produtos')

console.log("Todos os produtos", products)

// 1. Adicione um novo produto ao array com as mesmas propriedades dos produtos
// existentes.
let newProduct = { name: 'Hub', price: 200, quantity: 5, colors: ['silver', 'black', 'white'] , id:11}
products.push(newProduct)
console.log(products[10])
// // 2. Remova os produtos fora de estoque da matriz.

products = products.filter((item) => item.quantity !== 0);
console.log("Apenas produtos em estoque", products)
// // 3. Imprima no console a soma do estoque de todos os produtos.
const sumQuantity = products.map(item => item.quantity).reduce((sum, i) => sum + i, 0);
console.log("Total de produtos em estoque", sumQuantity)
// // 4. Imprima produtos com preço superior a um determinado valor.
function priceRange(array, price){
    newArray = array.filter(
        (item)=> item.price > price)
        return newArray
}
console.log("PBuscar em faixa de preço", priceRange(products, 1000))
// // 5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.

function findString(array, string){
    return array.filter((el) => el.name.includes(string)) 
}
console.log("Nome com a letra do parâmetro: ", findString(products,"o"))


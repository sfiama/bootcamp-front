
/*Usando a array acima, crie uma função para cada um dos seguintes requisitos:

1. Adicione um ID exclusivo a cada produto começando em 1.
2. Imprima o nome de cada um dos produtos no console.
3. Imprima no console o produto com o id 3.
4. Imprima no console os produtos com a cor “black”.
5. Imprima no console os produtos que não possuem cor.*/
let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
    ]

function addId(array){
        for(let i = 0; i < array.length; i++){
        array[i].id = i+1
    }
    return array
}

function productName(array){
    for(let i = 0; i < array.length; i++){
        console.log(`Produto ${array[i].name}`)
    }
}

function productById(array, id){
    return array.find(el=> el.id ===id)      
}

// products[id = 3]

function productByColor(array, color){
   return array.filter((el) => el.colors.includes(color)) 
}

function productWithoutColor(array){
return array.filter((el) => el.colors.length === 0)
}



console.log(products);
productName(products);
addId(products);
console.log("Produto por id", productById(products,1));
console.log("Produto por cor",productByColor(products, "black"))
console.log("Produto sem cor",productWithoutColor(products))

module.exports = products;
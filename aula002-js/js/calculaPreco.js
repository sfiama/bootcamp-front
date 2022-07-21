function calculaFrete (preco){
    let frete; 
    if(preco > 1 && preco<=2000 ){
    frete = 300;
    } else if(preco > 2000 && preco<=4000 ){
        frete = 450;
    }else if(preco > 4000){
        frete = 700;
    }
    return frete
}

function calculaTotal(preco){
    let frete = calculaFrete(preco);
    let valorFinal = preco + frete;
    return valorFinal
}

function calcularPreco(produto, preco){
    let total = calculaTotal(preco);
    return `O produto R$ ${produto} custa R$ ${preco}. Seu custo de envio é
    R$ 
    ${total-preco}. Portanto, o preço final é R$ ${total}'`;
}

console.log(calcularPreco('Macbook', 2500));
console.log(calcularPreco('Celular', 500));
console.log(calcularPreco('Playstation', 4500));

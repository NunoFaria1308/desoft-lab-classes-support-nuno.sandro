function calculavolume(area: number): number {
   let aresta = Math.sqrt(area/6);
    let volume = aresta ** 3;
    return volume;
    if (volume < 0) {
        throw new RangeError("Volume negativo");
        return volume;
    } else if (volume >= 1) {
        console.log("pequeno");
        return volume;
    } else if (volume >1 && volume < 2) {
        console.log("medio");
        return volume;
    } else (volume >= 2) 
        console.log("grande");{
        return volume;
    }
}
console.log(calculavolume(1)); // deve imprimir 0
console.log(calculavolume(4)); // deve imprimir 8
console.log(calculavolume(2)); // deve imprimir 0
export{calculavolume};

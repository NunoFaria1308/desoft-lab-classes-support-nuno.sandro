function calculaFx({ x }: { x: number; }): number {
    if (x < 0) {
      return x;
    } else if (x === 0) {
      return 0;
    } else {
      return x ** 2 - 2 * x;
    }
  }
console.log(calculaFx({ x: 0 })); // deve imprimir 0
console.log(calculaFx({ x: 4 })); // deve imprimir 8
console.log(calculaFx({ x: 2 })); // deve imprimir 0
  export{calculaFx}
  
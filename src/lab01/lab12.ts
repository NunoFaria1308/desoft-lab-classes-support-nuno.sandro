function teoremaDeTales(altpredio: number, sombpredio: number, altupax:number, sombpax:number): number {  
  if ((sombpredio - altpredio) !== 0 && (sombpax - altupax) !== 0) {
      return (altupax - sombpax) / (sombpredio - altpredio);
  } else {
    let resultadonull: number = 0;
      console.log("null");
      return resultadonull;
    }
  }
  export {teoremaDeTales};
  console.log(teoremaDeTales(2, 4, 3, 6));
  //alterar o null para 0
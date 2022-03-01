const ingredientes = [
    '2 hambúrgueres',
    'alface',
    'queijo',
    'molho especial',
    'cebola',
    'picles',
    'pão com gergelim'
  ];
  
  const fazUmBigMac = (ingredientes: string[]): string => {
    let bigMac: string = ingredientes.reduce((prevVal, elem ) => prevVal + `${elem}, `, '' )

    return bigMac
  };
  
  console.log(fazUmBigMac(ingredientes));
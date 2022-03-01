const desafio1asRosasNaoFalam = () => {
    type callbackFn = () => void;
    const geraIntervaloAleatório = (): number =>
      Math.floor(Math.random() * 3 * 1000);
  
    // métodos de versos. Estes métodos deverão ser modificados.
    const queixoMeAsRosas = (proxVerso: callbackFn) => {
      setTimeout(() => {
        console.log('Queixo-me às rosas');
        return proxVerso();
      }, geraIntervaloAleatório());
    };
  
    const masQueBobagem = (proxVerso: callbackFn) => {
      setTimeout(() => {
        console.log('Mas que bobagem');
        return proxVerso();
      }, geraIntervaloAleatório());
    };
  
    const asRosasNaoFalam = (proxVerso: callbackFn) => {
      setTimeout(() => {
        console.log('As rosas não falam');
        return proxVerso();
      }, geraIntervaloAleatório());
    };
  
    const simplesmenteAsRosasExalam = (proxVerso: callbackFn) => {
      setTimeout(() => {
        console.log('Simplesmente as rosas exalam');
        return proxVerso();
      }, geraIntervaloAleatório());
    };
  
    const oPerfumeQueRoubamDeTi = () => {
      setTimeout(() => {
        console.log('O perfume que roubam de ti, ai');
      }, geraIntervaloAleatório());
    };
  
    // Tentativa de cantar a música. Este bloco precisa ser modificado.
    queixoMeAsRosas(()=>{
      masQueBobagem(()=>{
        asRosasNaoFalam(()=>{
          simplesmenteAsRosasExalam(()=>{
            oPerfumeQueRoubamDeTi();
          });
        });
      });
    });
  };
  
  desafio1asRosasNaoFalam();
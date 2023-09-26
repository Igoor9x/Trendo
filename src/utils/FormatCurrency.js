
const FormatCurrency = (valor, format) => {
  return valor?.toLocaleString('pt-BR', {style: 'currency', currency: format });
};


export default FormatCurrency;

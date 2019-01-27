class ConverterValor {
  public ConverterValor(valor: number) {
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
}

export default ConverterValor
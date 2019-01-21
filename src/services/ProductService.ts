class ProductService {
  public findProducts() {
      return [{
          conteudo:'750 ML',
          descricao: 'Bebida que o danilo toma de vez em quando',
          embalagem:'Garrafa',
          foto:'https://static.carrefour.com.br/medias/sys_master/images/images/h7f/hc3/h00/h00/9264053190686.jpg',
          id: 1,
          ingredientes:'Cevada, Malte, Grãos e Água.',
          nome:'Whisky Johnnie Walker Blue Label',
          origem:'Escócia',
          sabor:'tradicional',
          valor: '500,00',
          versao:'Blue Label',          
      }];
  }
}

export default ProductService;

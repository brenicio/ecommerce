class ProductService {
    public findProducts() {
        return [
            {
                conteudo: '750 ML',
                descricao: 'Whisky Johnnie Walker Blue Label 750 ML',
                embalagem: 'Garrafa',
                foto: 'https://uploaddeimagens.com.br/images/001/857/043/full/jw.jpg?1548453632',
                id: '1',
                ingredientes: 'Cevada, Malte, Grãos e Água.',
                nome: 'Johnnie Walker',
                origem: 'Escócia',
                sabor: 'tradicional',
                valor: '500,00',
                versao: 'Blue Label',
            },
            {
                conteudo: '750ml',
                descricao: 'Whisky Grand Old Parr Escocês 12 Anos 750ml',
                embalagem: 'Garrafa',
                foto: 'https://uploaddeimagens.com.br/images/001/857/047/full/op.jpg?1548453832',
                id: '2',
                ingredientes: 'Cevada, Malte, Grãos e Água.',
                nome: 'Grand Old Parr',
                origem: 'Escócia',
                sabor: 'tradicional',
                valor: '144,00',
                versao: 'Tradicional',
            },
            {
                conteudo: '1000ml',
                descricao: 'Whisky Chivas Regal Escocês 12 Anos 1 Litro',
                embalagem: 'Garrafa',
                foto: 'https://uploaddeimagens.com.br/images/001/857/056/full/cr.jpg?1548454158',
                id: '3',
                ingredientes: 'Água, Grãos e Malte.',
                nome: 'Chivas Regal',
                origem: 'Escócia',
                sabor: 'tradicional',
                valor: '109,90',
                versao: '12 Anos',
            },
            {
                conteudo: '1000ml',
                descricao: 'Whisky White Horse 1 Litro',
                embalagem: 'Garrafa',
                foto: 'https://uploaddeimagens.com.br/images/001/857/063/full/wh.jpg?1548454496',
                id: '4',
                ingredientes: 'Cevada, Malte, Grãos e Água.',
                nome: 'White Horse',
                origem: 'Escócia',
                sabor: 'tradicional',
                valor: '67,39',
                versao: 'Tradicional',
            },
            {
                conteudo: '1000ml',
                descricao: 'Whisky Ballantine\'s Finest Escocês 1 Litro',
                embalagem: 'Garrafa',
                foto: 'https://uploaddeimagens.com.br/images/001/857/069/full/b.jpg?1548454748',
                id: '5',
                ingredientes: 'Água, Cevada, outros Cereais e Leveduras.',
                nome: 'Ballantine\'s',
                origem: 'Escócia',
                sabor: 'tradicional',
                valor: '85,99',
                versao: 'Finest',
            },


        ];
    }

    public findProductsById(ID: string):any {
        return this.findProducts().find(p => p.id === ID);
    }

}

export default ProductService;

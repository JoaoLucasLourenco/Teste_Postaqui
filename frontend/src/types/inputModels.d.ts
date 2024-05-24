export interface IOriginDesinyInputModels {
    nome: string;
    email: string;
    uf:string;
    cpf: number;
    phone: number;
    cep: number;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    complemento?:string;
}

export interface IPackageInputModels{
    peso: number;
    altura: number;
    largura: number;
    comprimento: number;
    logReversa: boolean;
    avisoRecebimento: boolean;
    maosProprias: boolean;
    valorMercadoria: number;
    qtdItens: number;
    descItens: string;
}

export interface Endereco {
    cep: string;
    state: string;
    uf: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
  }
  
  export  interface Pacote {
    weight: string;
    height: string;
    width: string;
    length: string;
    reverse: boolean;
    ar: boolean;
    own_hands: boolean;
    information: {
      amount: string;
      quantity: string;
      description: string;
    };
  }
  
  export interface RespostaEnvio {
    _id: string;
    carrier: string;
    price: number;
    discount: number;
  }
  
  export  interface DadosEnvio {
    sender: {
      fullname: string;
      cpf: string;
      phone: string;
      email: string;
      address: Endereco;
    };
    receiver: {
      fullname: string;
      cpf: string;
      phone: string;
      email: string;
      address: Endereco;
    };
    package: Pacote;
  }



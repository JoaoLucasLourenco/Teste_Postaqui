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
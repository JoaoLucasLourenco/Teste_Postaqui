export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidCPF(cpf: string): boolean {

    cpf = cpf.replace(/[^\d]/g, '');
  

    if (cpf.length !== 11) {
      return false;
    }
  

    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  

    let sum = 0;
    let remainder;
  

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(9))) {
      return false;
    }
  

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
}


export function isValidTelefone(telefone: string): boolean {

    const telefoneNumerico = telefone.replace(/[^\d]/g, '');
  

    if (telefoneNumerico.length !== 13) {
      return false;
    }
  

    const telefoneRegex = /^\+55 \(\d{2}\) \d{5}-\d{4}$/;
  

    return telefoneRegex.test(telefone);
}


export function isValidCEP(cep: string): boolean {

    const cepNumerico = cep.replace(/[^\d]/g, '');

    if (cepNumerico.length !== 8) {
      return false;
    }
  
    const cepRegex = /^\d{2}\.\d{3}-\d{3}$/;
  
    return cepRegex.test(cepNumerico);
  }

export function limparNumeros(texto: string): string {
    return texto.replace(/\D/g, '');
  }
export  function limparCEP(cep: string): string {
    return cep.replace(/[^\d]/g, ''); 
}
  
function submitForm(event) {
  event.preventDefault();
  try {
    const nome = document.getElementById('nome').value;
    const id = document.getElementById('id').value;
    const tipoCliente = document.getElementById('tipoCliente').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const vendedor = document.getElementById('vendedor').value;
    const limiteCredito = document.getElementById('limiteCredito').value;

    //validar campos
    if (!nome || !/^[A-Za-z]+$/.test(nome)) {
      throw new Error('Nome é obrigatório e deve conter apenas letras.');
    }

    if (!id || isNaN(id)) {
      throw new Error('ID é obrigatório e deve ser um número.');
    }

    if (!tipoCliente) {
      throw new Error('Tipo de cliente é obrigatório.');
    }

    if (!endereco) {
      throw new Error('Endereço é obrigatório.');
    }

    if (!cep || isNaN(cep)) {
      throw new Error('CEP é obrigatório e deve ser um número.');
    }

    if (!dataNascimento) {
      throw new Error('Data de Nascimento é obrigatória.');
    }

    if (!vendedor || !/^[A-Za-z]+$/.test(vendedor)) {
      throw new Error('Vendedor é obrigatório e deve conter apenas letras.');
    }

    if (!limiteCredito || isNaN(limiteCredito)) {
      throw new Error('Limite de Crédito é obrigatório e deve ser um número.');
    }

    //armazenar nome e id no cookie
    document.cookie = `nome=${nome}`;
    document.cookie = `id=${id}`;

    //exemplo de exibição dos valores
    alert('Cadastro realizado com sucesso!\n\n' +
      `Nome: ${nome}\n` +
      `ID: ${id}\n` +
      `Tipo de cliente: ${tipoCliente}\n` +
      `Endereço: ${endereco}\n` +
      `CEP: ${cep}\n` +
      `Data de Nascimento: ${dataNascimento}\n` +
      `Vendedor: ${vendedor}\n` +
      `Limite de Crédito: ${limiteCredito}`);

    //limpar campos do formulário
    document.getElementById('cadastroForm').reset();
  } catch (error) {
    alert(error.message);
  }
}

document.getElementById('cadastroForm').addEventListener('submit', submitForm);

//agora sim ta certo tmj
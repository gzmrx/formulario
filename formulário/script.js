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
  
      //validar campos (exemplo: nome não pode ser vazio)
      if (!nome) {
        throw new Error('Nome é obrigatório.');
      }
  
      if (!id) {
        throw new Error('ID é obrigatório.');
      }
  
      //validar outros campos
  
      //armazenar nome e ID no cookie
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
  
  //tmj vaguin
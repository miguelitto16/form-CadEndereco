'use strict';

// Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('rg').value = '';
    document.getElementById('email').value = '';
    document.getElementById('confirmEmail').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
}

// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Função para preencher o formulário
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

// Função para validar email
const validarEmail = () => {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    
    if (email !== confirmEmail) {
        console.log("emails não conferem")
        document.getElementById('email').value='';
        document.getElementById('email').focus();
        //document.getElementById('email').value = '';
        //document.getElementById('confirmEmail').value = '';
    }else{
        console.log("Emails ok");
    }
}

// Função para validar senha
const validarSenha = () => {
    const senha = document.getElementById('password').value;
    const confirmSenha = document.getElementById('confirmPassword').value;
    
    if (senha !== confirmSenha) {
        console.log("senha  não conferem")
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').focus();
        
    }else{
        console.log("senha ok");
    
}
    }


// Consumo da API da ViaCEP
const pesquisarCep = async () => {
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)) {
        try {
            const response = await fetch(url);
            const endereco = await response.json();

            if (endereco.erro) {
                alert('CEP não encontrado');
            } else {
                preencherFormulario(endereco);
            }
        } catch (error) {
            console.error('Erro ao buscar o CEP: ' + error);
        }
    } else {
        alert('CEP incorreto');
    }
}

// Adiciona evento ao input do CEP para executar a função pesquisarCep
document.getElementById('cep').addEventListener('focusout', pesquisarCep);

// Adiciona eventos para validar email e senha
//document.getElementById('confirmEmail').addEventListener('change', validarEmail);
document.getElementById('password').addEventListener('change', validarSenha);
document.getElementById('confirmPassword').addEventListener('change', validarSenha);


//Criar lista de pacientes 
const listaPacientes= [
{
    codigo:1, 
    nome:'Bárbara',
    convenio: 'Particular',
    telefone:'31 99777-3569',
    sexo: 'Feminino',
    Internado:
},

{   codigo:2,
    nome:'Jose',
    convenio: 'Unimed',
    Telefone: '21 94757-1265',
    sexo: 'masculino',
    Internado:
   

},

{   codigo:3,
    nome:'Josiane',
    convenio: 'Particular',
    Telefone: '4799586-3524',
    sexo: 'Feminino',
    Internado: 'Sim',
 },
 
]

function gerarListaPacientes () {
    //Criando vínculo entre a tabela no html e a constante no javascript

    const tabelaPacientes = document.getElementById('tabelaPacientes');
    for (let paciente of listaPacientes){
    tabelaPacientes.innerHTML +=`
<tr>
            <td>${paciente.codigo}</td>
            <td>${paciente.nome}</td>
            <td>${paciente.convenio}</td>
            <td>${paciente.telefone}</td>
             <td>${paciente.sexo}</td>
             <td>${paciente.Internado}</td>
              <td>
                        

<button class= "btn btn-success">Editar</button>
<button class= "btn btn-danger">Excluir</button>



    </td>
    </tr>
   `;
}
}

gerarListaPacientes (); 

//Exercício: 
//Adicionar a coluna 'internado na tabela e na lisa de pacientes 
Desafio
//Impletar funcionalidade do botão excluir´
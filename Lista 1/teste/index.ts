import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import Armazem from "./armazem";
import Entrada from "./entrada";

let armazem = Armazem.InstanciaUnica
let dpergunta = "Possui algum dependente(S/N)"
let entrada = new Entrada()
let running = true
var res = ""
var sn = ""

console.log("Bem vindo");
while(running){
    console.log("-------------------------------");
    console.log("1 - Listar clientes");
    console.log("2 - Buscar cliente");
    console.log("3 - Cadastrar cliente");
    console.log("4 - Atualizar cliente");
    console.log("5 - Deletar cliente");
    console.log("6 - Sair");
    
    res = entrada.receberTexto("Insira uma ação: ")
    switch(res){
        case "1":
            armazem.Clientes.forEach(cliente => {
                console.log(`****************************\n`
                + `| Nome: ${cliente.nome}\n`
                + `| Nome social: ${cliente.nomeSocial}\n`
                + `| Data de nascimento: ${cliente.dataNascimento.toLocaleDateString()}\n`
                + `| Data de cadastro: ${cliente.dataCadastro.toLocaleDateString()}`
                + `| Endereco:\n`
                + `| rua: ${cliente.endereco.rua}\n`
                + `| bairro: ${cliente.endereco.bairro}\n`
                + `| cidade: ${cliente.endereco.cidade}\n`
                + `| estado: ${cliente.endereco.estado}\n`
                + `| país: ${cliente.endereco.pais}\n`
                + `| código postal: ${cliente.endereco.pais}`);
                for (let index = 0; index < cliente.telefones.length; index++) {
                    console.log(`| Telefone:\n`);
                    if (index == 0) {
                        console.log(`| DDD: ${cliente.telefones[index].ddd}\n`
                        + `| Número: ${cliente.telefones[index].numero}`);
                    } else {
                        console.log(`\n| DDD: ${cliente.telefones[index].ddd}\n`
                        + `| Número: ${cliente.telefones[index].numero}`);
                    }
                }
                for (let index = 0; index < cliente.documentos.length; index++) {
                    console.log(`| Documento:\n`);
                    if (index == 0) {
                        console.log(`| Tipo: ${cliente.documentos[index].tipo}\n`
                        + `| Data expedição: ${cliente.documentos[index].dataExpedicao.toLocaleDateString()}\n`
                        + `| Número: ${cliente.documentos[index].numero}`);
                    } else {
                        console.log(`\n| Tipo: ${cliente.documentos[index].tipo}\n`
                        + `| Data expedição: ${cliente.documentos[index].dataExpedicao.toLocaleDateString()}\n`
                        + `| Número: ${cliente.documentos[index].numero}`);
                    }
                }
            })
            break;
        case "2":
            let pesquisa = entrada.receberTexto("Insira o nome")
            armazem.Clientes.forEach(cliente => {
                if (cliente.nome == pesquisa){
                    console.log(`****************************\n`
                    + `| Nome: ${cliente.nome}\n`
                    + `| Nome social: ${cliente.nomeSocial}\n`
                    + `| Data de nascimento: ${cliente.dataNascimento.toLocaleDateString()}\n`
                    + `| Data de cadastro: ${cliente.dataCadastro.toLocaleDateString()}`
                    + `| Endereco:\n`
                    + `| rua: ${cliente.endereco.rua}\n`
                    + `| bairro: ${cliente.endereco.bairro}\n`
                    + `| cidade: ${cliente.endereco.cidade}\n`
                    + `| estado: ${cliente.endereco.estado}\n`
                    + `| país: ${cliente.endereco.pais}\n`
                    + `| código postal: ${cliente.endereco.pais}`);
                    for (let index = 0; index < cliente.telefones.length; index++) {
                        console.log(`| Telefone:\n`);
                        if (index == 0) {
                            console.log(`| DDD: ${cliente.telefones[index].ddd}\n`
                            + `| Número: ${cliente.telefones[index].numero}`);
                        } else {
                            console.log(`\n| DDD: ${cliente.telefones[index].ddd}\n`
                            + `| Número: ${cliente.telefones[index].numero}`);
                        }
                    }
                    for (let index = 0; index < cliente.documentos.length; index++) {
                        console.log(`| Documento:\n`);
                        if (index == 0) {
                            console.log(`| Tipo: ${cliente.documentos[index].tipo}\n`
                            + `| Data expedição: ${cliente.documentos[index].dataExpedicao.toLocaleDateString()}\n`
                            + `| Número: ${cliente.documentos[index].numero}`);
                        } else {
                            console.log(`\n| Tipo: ${cliente.documentos[index].tipo}\n`
                            + `| Data expedição: ${cliente.documentos[index].dataExpedicao.toLocaleDateString()}\n`
                            + `| Número: ${cliente.documentos[index].numero}`);
                        }
                    }
                }
            })
            break;
        case "3":
            let cliente = new Cliente()
            cliente.nome = entrada.receberTexto("Insira o nome")
            cliente.nomeSocial = entrada.receberTexto("Insira o nome social(opcional)")
            cliente.dataCadastro = entrada.receberData("Insira a data do cadastro")
            cliente.dataNascimento = entrada.receberData("Insira a data do nascimento")
            let endereco = new Endereco()
            endereco.rua = entrada.receberTexto("Insira sua rua")
            endereco.bairro = entrada.receberTexto("Insira seu bairro")
            endereco.cidade = entrada.receberTexto("Insira sua cidade")
            endereco.estado = entrada.receberTexto("Insira seu estado")
            endereco.pais = entrada.receberTexto("Insira seu pais")
            endereco.codigoPostal = entrada.receberTexto("Insira seu codigo postal")
            cliente.endereco = endereco
            sn = "S"
            dpergunta = "Possui algum dependente(S/N)"
            while(sn == "S"){
                sn = entrada.receberTexto(dpergunta)
                if(sn == "S") {
                    let dependente = new Cliente()
                    dependente.nome = entrada.receberTexto("Insira o nome")
                    dependente.nomeSocial = entrada.receberTexto("Insira o nome social(opcional)")
                    dependente.dataCadastro = entrada.receberData("Insira a data do cadastro")
                    dependente.dataNascimento = entrada.receberData("Insira a data do nascimento")
                    dependente.endereco = cliente.endereco.clonar() as Endereco
                    dependente.titular = cliente
                    cliente.dependentes.push(dependente)
                    dpergunta = "Possui mais algum dependente(S/N)"
                } else if(sn != "N") {
                    sn = "N"
                } else {
                    console.log("Resposta não compreendida - Reentre");
                    sn = "S"
                }
            }
            sn = "S"
            dpergunta = "Possui algum telefone(S/N)"
            while(sn == "S"){
                sn = entrada.receberTexto(dpergunta)
                if(sn == "S") {
                    let telefone = new Telefone()
                    telefone.ddd = entrada.receberTexto("Insira o ddd")
                    telefone.numero = entrada.receberTexto("Insira o numero")
                    cliente.telefones.push(telefone)
                    dpergunta = "Possui mais algum telefone(S/N)"
                } else if(sn != "N") {
                    sn = "N"
                } else {
                    console.log("Resposta não compreendida - Reentre");
                    sn = "S"
                }
            }
            armazem.Clientes.push(cliente)
            break;
        case "4":
            let updatedLista: Cliente[]
            let atualizarCliente = entrada.receberTexto("Insira o nome")
            armazem.Clientes.forEach(cliente => {
                if (cliente.nome != atualizarCliente){
                    updatedLista.push(cliente)
                } else {
                    let clienteUpdate = new Cliente()
                    clienteUpdate.nome = entrada.receberTexto("Insira o nome")
                    clienteUpdate.nomeSocial = entrada.receberTexto("Insira o nome social(opcional)")
                    clienteUpdate.dataCadastro = entrada.receberData("Insira a data do cadastro")
                    clienteUpdate.dataNascimento = entrada.receberData("Insira a data do nascimento")
                    let enderecoUpdate = new Endereco()
                    enderecoUpdate.rua = entrada.receberTexto("Insira sua rua")
                    enderecoUpdate.bairro = entrada.receberTexto("Insira seu bairro")
                    enderecoUpdate.cidade = entrada.receberTexto("Insira sua cidade")
                    enderecoUpdate.estado = entrada.receberTexto("Insira seu estado")
                    enderecoUpdate.pais = entrada.receberTexto("Insira seu pais")
                    enderecoUpdate.codigoPostal = entrada.receberTexto("Insira seu codigo postal")
                    clienteUpdate.endereco = enderecoUpdate
                    sn = "S"
                    dpergunta = "Possui algum dependente(S/N)"
                    while(sn == "S"){
                        sn = entrada.receberTexto(dpergunta)
                        if(sn == "S") {
                            let dependenteUpdate = new Cliente()
                            dependenteUpdate.nome = entrada.receberTexto("Insira o nome")
                            dependenteUpdate.nomeSocial = entrada.receberTexto("Insira o nome social(opcional)")
                            dependenteUpdate.dataCadastro = entrada.receberData("Insira a data do cadastro")
                            dependenteUpdate.dataNascimento = entrada.receberData("Insira a data do nascimento")
                            dependenteUpdate.endereco = cliente.endereco.clonar() as Endereco
                            dependenteUpdate.titular = cliente
                            clienteUpdate.dependentes.push(dependenteUpdate)
                            dpergunta = "Possui mais algum dependente(S/N)"
                        } else if(sn != "N") {
                            sn = "N"
                        } else {
                            console.log("Resposta não compreendida - Reentre");
                            sn = "S"
                        }
                    }
                    sn = "S"
                    dpergunta = "Possui algum telefone(S/N)"
                    while(sn == "S"){
                        sn = entrada.receberTexto(dpergunta)
                        if(sn == "S") {
                            let telefoneUpdate = new Telefone()
                            telefoneUpdate.ddd = entrada.receberTexto("Insira o ddd")
                            telefoneUpdate.numero = entrada.receberTexto("Insira o numero")
                            clienteUpdate.telefones.push(telefoneUpdate)
                            dpergunta = "Possui mais algum telefone(S/N)"
                        } else if(sn != "N") {
                            sn = "N"
                        } else {
                            console.log("Resposta não compreendida - Reentre");
                            sn = "S"
                        }
                    }
                    updatedLista.push(clienteUpdate)
                }
            })
            armazem.Clientes = updatedLista
            break;
        case "5":
            let newLista: Cliente[]
            let deletarCliente = entrada.receberTexto("Insira o nome")
            armazem.Clientes.forEach(cliente => {
                if (cliente.nome != deletarCliente){
                    newLista.push(cliente)
                }
            })
            armazem.Clientes = newLista
            break;
        case "6":
            console.log("Adeus");
            running = false
            break;
        default:
            console.log("Ação não encontrada - Reentre");
            break;
    }
}
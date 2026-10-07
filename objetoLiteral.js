const user = {
    nome: "Xaxa",
    email: "xaxa@xaxa.com",
    nascimento: "1981/09/18",
    role: "estudantes",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Junior",
    emai: "jr@m.com",
    role: "admin",
    criarCurso(){
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

//user.exibirInfos()
//const exibir = user.exibirInfos
//exibir()
/*
const exibir = function(){
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir()
*/
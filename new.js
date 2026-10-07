function User (nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

//const novoUser = new User('Ana', "an@a.com")
//console.log(novoUser.exibirInfos())

function Admin(role){
    User.call(this, 'Ana', 'an@a.com')
    this.role = role || 'estudante'
}

Admin.protype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)

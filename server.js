import express from 'express'

const app = express()



app.post('/usuarios', (req,res) =>{
    res.send("Sasuke")
})
app.get('/usuarios', (req, res) => {
    res.send("Naruto")
})

app.listen(3000)
// import express from 'express'
// import { PrismaClient } from '../node_modules/@prisma/client/default.js'
// const prisma = new PrismaClient()
// const app = express() //agora dentro do app a gente tem acesso a todo o express

// /*
//     Objetivo: Criar uma API de Usuários
//     Passos:
//     - Criar um usuário
//     - Listar todos os usuários
//     - Editar um usuário
//     - Deletar um usuário
// */



// app.use(express.json())
// const users = []
// app.post('/usuarios', async (req, res) => {

//     await prisma.User.create({
//         data: {
//             email: req.body.email,
//             name: req.body.name,
//             age: req.body.age
//         }
//     })
//     res.status(201).json(req.body)
// })

// app.get('/usuarios', (req, res) => { // req, res = request, response
//     res.status(200).json(users)               // requisição e resposta (a ponte para o front e back)
// })

// app.listen(3000)
// /*
//     As rotas(get,push,put...) precisam :
//     1)Tipo de Rota / Método HTTP
//     2)Endereço. Ex: www.importacao.com/usuarios <-- Esse último
// */









// //Kauan
// //RzZ2S48yP1OOXOMe
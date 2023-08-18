const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const {v4: uuid} = require('uuid')

let users = [
    {
        id: 1,
        username: 'Cefer',
    },
    {
        id: 2,
        username: 'Revan',
    },
    {
        id: 3,
        username: 'Mikayil',
    },
    {   
        id:4,
        username: 'Ramin',
    },
]



app.get('/users',(req,res)=> {
    return res.json(users)
})


app.get('/users/:id',(req,ress) => {
    const { id } = req.params
    const { username} = req.body
    const user = user.find((a)=> a.id == id)
    if (user) {
        user.username = username
        return res.status(200).json(user)
    } else {
        return res.ststus(400).json('user is not existing')
    }
})



app.post('/users',(req,res)=> {
    const {username,email} = req.body
    const newUser = {
        id:uuid(), 
        username: username,
    }
    users.push(newUser)
    return res.json("User added")
})


app.delete("/users/:id",(req,res)=> {
    const {id} = req.params
    users= users.filter((user)=> user.id != id)
    return res.json("user deleted")
})


app.patch('/users/:id',(req,res)=> {
    const { id } = req.params
    const { username,email } = req.body
    const user = users.find((a)=> a.id == id)
    if (user) {
        user.username = username
        return res.json('user updated')
    } else {
        return res.json('user is not existing')
    }
});

app.put('/users/:id',(req,res)=> {
    const { id } = req.params
    const { username} = req.body
    const user = users.find((a)=> a.id == id);
    if (user) {
        user.username = username
        return res.json('User updated');
    } else {
        return res.json('User is not existing');
    }
});


const PORT = 8000

app.listen(PORT,console.log(`Server Runnig: http://localhost:${PORT}`))
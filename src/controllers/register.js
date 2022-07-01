const User = require('../models').User;

const register = async(req, res) => {
    const {username, password, confirmpassword ,admin} = req.body;

    if (!username) return res.status(400).json({ message: 'Campo username não informado!' })
    if (!admin) return res.status(400).json({ message: 'Campo de admin não informado!' })
    if (!password) return res.status(400).json({ message: 'Campo de senha não informado!' })
    if (!confirmpassword) return res.status(400).json({ message: 'Campo de confirma senha não informado!' })

    if (password !== confirmpassword) return res.status(400).json({message: 'Senhas não são identicas!'})

    const isFoundUsername = await User.findOne({ where: {username} })
    if (isFoundUsername) return res.status(400).json({ message: 'Usuário informado já existe!' })

    const user = await User.create({
        username,
        password,
        admin
    })

    return res.status(201).json(user)

}

module.exports = {
    register
}
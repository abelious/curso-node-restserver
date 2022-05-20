const { response, request } = require('express');

const usuariosGet = (req, res = response) => {
    
    const {q, nombre} = req.query;

    res.json({
        msg: "get API - controlador",
        q,
        nombre
    })
};

const usuariosPost = (req, res = response) => {    
    const body = req.body;

    res.json({
        msg: "post API - controlador",
        body
    })
};

const usuariosPut = (req, res = response) => {
    const id =req.params.id;

    res.json({
        msg: "put API - controlador",
        id
    })
};

const usuariosDelete = (req, res = response) => {
    res.json({
        "ok": true,
        "msg": "delete API - controlador"
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut, 
    usuariosDelete
}
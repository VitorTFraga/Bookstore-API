import express from 'express'
import book from './bookRoute.js'
import authors from './authorRoute.js'

const route = (app) =>{

    app.route('/').get((req, res)=>res.status(200).send('curso de node.js'));

    app.use(express.json(), book, authors);
}

export default route;
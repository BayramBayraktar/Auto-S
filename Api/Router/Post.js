const Router = require('express').Router();
const multer = require('multer')
const blogController = require('../controller/blogController')
const verify = require('./verify')

Router.get('/create', verify, blogController.GetCreate)


//Storage Path
const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/Uploads/img')
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const Upload = multer({
    storage: Storage,
    limits: {
        fieldSize: 1024 * 1024 * 3
    },

});

Router.post('/create', verify, Upload.array("photos"), blogController.PostCreate)

Router.get('/lstAll', blogController.GetLstAll)

Router.get('/lst', blogController.GetLst)

Router.get('/lst/:make', blogController.GetLstMake)

Router.get('/lst/:make/:model', blogController.GetLstMakeModel)

Router.get('/offers/:make/:model', blogController.GetOffersMakeModel)


module.exports = Router

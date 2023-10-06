const User = require('../Models/User');
const PostSchma = require('../Models/Post');

//create
const GetCreate = async (req, res) => {
    await res.status(200).json({
        success: true,
        data: {}
    })
};


//post /create
const PostCreate = async (req, res) => {
    const photos = req.files
    const arr = []
    for (let i = 0; i < photos.length; i++) {
        arr.push(photos[i].filename)
    }
    const { price } = req.body
    const Price = price.replace(',', '')
    const Post = new PostSchma({
        postedBy: req.user._id,
        make: req.body.make,
        model: req.body.model,
        price: Price,
        km: req.body.km,
        firstRegistration: req.body.firstRegistration,
        photos: arr,
        Descraption: [{
            Getriebe: req.body.Getriebe,
            Komfort: req.body.Komfort,
            Sicht: req.body.Sicht,
            Sicherheit: req.body.Sicherheit,
            Entertainment: req.body.Entertainment,
            PostedByDescraption: req.body.PostedByDescraption
        }]
    })


    await Post.save((err, result) => {
        if (err) {
            res.json({
                success: false,
                message: 'post registration failed'
            })
        }
        if (result) {
            res.json({
                success: true,
                message: 'Post registration successful'
            })
        } else {
            res.json({
                success: false,
                message: 'post registration failed'
            })
        }
    })


}

// get lstAll
const GetLstAll = async (req, res) => {

    if (!req.query.pricefrom && !req.query.priceto) {
        await PostSchma.find()
            .then(result => res.json(result))
    }
    if (req.query.pricefrom) {
        if (req.query.priceto) {
            const pricefrom = req.query.priceto && req.query.pricefrom.replace(',', '')
            const priceto = req.query.priceto && req.query.priceto.replace(',', '')
            await PostSchma.find({ price: { $gte: pricefrom, $lte: priceto } })
                .sort({
                    price: +1,
                }).then((result) => {
                    if (!result) {
                        res.send('not Result')
                    } else {
                        res.json(result)
                    }
                })
        } else {
            const pricefrom = req.query.pricefrom.replace(',', '')
            await PostSchma.find({ price: { $gte: pricefrom } })
                .sort({
                    price: +1,
                }).then((result) => {
                    if (!result) {
                        res.send('not Result')
                    } else {
                        res.json(result)
                    }
                })
        }
    }

    if (!req.query.pricefrom) {
        if (req.query.priceto) {
            const priceto = req.query.priceto.replace(',', '')
            await PostSchma.find({ price: { $lte: priceto } })
                .sort({
                    price: +1,
                }).then((result) => {
                    if (!result) {
                        res.send('not Result')
                    } else {
                        res.json(result)
                    }
                })
        }
    }
}

// get lst
const GetLst = async (req, res) => {
    try {
        
        const totalMake = await PostSchma.find()

        if (req.query.pricefrom) {
            if (req.query.priceto) {
                const pricefrom = req.query.pricefrom && req.query.pricefrom.replace(',', '')
                const priceto = req.query.priceto && req.query.priceto.replace(',', '')

                let query = PostSchma.find({ price: { $gte: pricefrom, $lte: priceto } });
                const page = parseInt(req.query.page || 1)
                const Pagesize = parseInt(req.query.limit || 3)
                const skip = (page - 1) * Pagesize;
                const total = totalMake.length
                const pages = Math.ceil(total / Pagesize)

                query = query.skip(skip).limit(Pagesize).sort({ price: +1 })
                const result = await query;

                res.status(200).json({
                    status: "success",
                    count: result.length,
                    totalMake,
                    page,
                    pages,
                    result
                });
            } else {
                const pricefrom = req.query.pricefrom && req.query.pricefrom.replace(',', '')


                let Query = PostSchma.find({ price: { $gte: pricefrom } });

                const page = parseInt(req.query.page || 1)
                const Pagesize = parseInt(req.query.limit || 3)
                const skip = (page - 1) * Pagesize;
                const total = totalMake.length
                const pages = Math.ceil(total / Pagesize)
    
                Query = Query.skip(skip).limit(Pagesize).sort({ price: +1 })
                const result = await Query;
    
                res.status(200).json({
                    status: "success",
                    count: result.length,
                    page,
                    totalMake,
                    pages,
                    result
                });
            }
           
        }


    } catch (error) {
        console.log(error)
    }
}

// Get /lst/:make
const GetLstMake = async (req, res) => {

    try {

        const totalMake = await PostSchma.find({ make: { $in: req.params.make } })

        if (req.query.pricefrom) {
            if (req.query.priceto) {
                const pricefrom = req.query.pricefrom && req.query.pricefrom.replace(',', '')
                const priceto = req.query.priceto && req.query.priceto.replace(',', '')

                let query = PostSchma.find({ make: { $in: req.params.make }, price: { $gte: pricefrom, $lte: priceto } });
                const page = parseInt(req.query.page || 1)
                const Pagesize = parseInt(req.query.limit || 3)
                const skip = (page - 1) * Pagesize;
                const total = totalMake.length
                const pages = Math.ceil(total / Pagesize)

                query = query.skip(skip).limit(Pagesize).sort({ price: +1 })
                const result = await query;

                res.status(200).json({
                    status: "success",
                    count: result.length,
                    totalMake,
                    page,
                    pages,
                    result
                });
            }
            const pricefrom = req.query.pricefrom && req.query.pricefrom.replace(',', '')


            let query = PostSchma.find({ make: { $in: req.params.make }, price: { $gte: pricefrom } });
            const page = parseInt(req.query.page || 1)
            const Pagesize = parseInt(req.query.limit || 3)
            const skip = (page - 1) * Pagesize;
            const total = totalMake.length
            const pages = Math.ceil(total / Pagesize)

            query = query.skip(skip).limit(Pagesize).sort({ price: +1 })
            const result = await query;

            res.status(200).json({
                status: "success",
                count: result.length,
                page,
                totalMake,
                pages,
                result
            });
        }


    } catch (error) {
        console.log(error)
    }


}


// get lst/make/model
const GetLstMakeModel = async (req, res) => {
    try {

        const totalMake = await PostSchma.find({ make: { $in: req.params.make }, model: { $in: req.params.model } })

        if (req.query.pricefrom) {
            if (req.query.priceto) {
                const pricefrom = req.query.pricefrom && req.query.pricefrom.replace(',', '')
                const priceto = req.query.priceto && req.query.priceto.replace(',', '')

                let query = PostSchma.find({ make: { $in: req.params.make }, model: { $in: req.params.model }, price: { $gte: pricefrom, $lte: priceto } });
                const page = parseInt(req.query.page || 1)
                const Pagesize = parseInt(req.query.limit || 3)
                const skip = (page - 1) * Pagesize;
                const total = totalMake.length
                const pages = Math.ceil(total / Pagesize)

                query = query.skip(skip).limit(Pagesize).sort({ price: +1 })
                const result = await query;

                res.status(200).json({
                    status: "success",
                    count: result.length,
                    page,
                    totalMake,
                    pages,
                    result
                });
            }
            const pricefrom = req.query.pricefrom && req.query.pricefrom.replace(',', '')
            //  const priceto = req.query.priceto && req.query.priceto.replace(',', '')


            let query = PostSchma.find({ make: { $in: req.params.make }, model: { $in: req.params.model }, price: { $gte: pricefrom } })
            const page = parseInt(req.query.page || 1)
            const Pagesize = parseInt(req.query.limit || 3)
            const skip = (page - 1) * Pagesize;
            const total = totalMake.length
            const pages = Math.ceil(total / Pagesize)

            query = query.skip(skip).limit(Pagesize).sort({ price: +1 })
            const result = await query;

            res.status(200).json({
                status: "success",
                count: result.length,
                page,
                totalMake,
                pages,
                result
            });
        }

    } catch (error) {
        console.log(error)
    }

}

// Offers/:make/:model
const GetOffersMakeModel = async (req, res) => {
    if (req.params.make && req.params.model && req.query.id) {
        await PostSchma.findById(req.query.id)
            .then((Post) => {
                if (Post) {
                    User.findOne({ _id: { $in: Post.postedBy } }).then((User) => {
                        if (User) {
                            res.json({ Post, User })
                        }
                    })
                }
            })
    }
}


module.exports = {
    GetCreate,
    PostCreate,
    GetLstAll,
    GetLst,
    GetLstMake,
    GetLstMakeModel,
    GetOffersMakeModel
}

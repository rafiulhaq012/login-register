const router = require("express").Router();
const mongoose = require("mongoose")

const post = mongoose.model("Post")

router.post("/register", async (req, res) => {
    try { 
        const post1 = new post();
        post1.name = req.body.name;
        post1.email = req.body.email;
        post1.phone = req.body.phone;
        post1.password = req.body.password;
        // if (req.email.unique=true) {
        //     res.send('asdasdasdasd')
        // }
        await post1.save();    
        res.send(post1)    
    } catch (error) {
        console.log('Post - ERROR',error);
        return res.status(500).json({msg: 
        'error'
        })
    }


});

//using post method
router.post("/login", async(req, res) => {
    try {
        const post1 = await post.find({
            email: req.body.email,
            password: req.body.password,
        })
        if (!post1) {
            res.status(400).json({
                msg:'ERROR'
            })
        } 
        res.send(post1)        
    } catch (error) {
        console.log('Get - ERROR',error);
        res.status(500)
    }
})

////using get method
// router.get("/:email/:password", async(req, res) => {
//     try {
//         const post1 = await post.find({
//             email: req.params.email,
//             password: req.params.password,
//         })
//         res.send(post1)        
//     } catch (error) {
//         console.log('Get - ERROR',error);
//         res.status(500)
//     }

// })

router.get("/", async (req, res) => {
    try {
        const posts = await post.find({})
        res.send(posts)
    } catch (error) {
        res.status(500)
    }

})

module.exports = router;
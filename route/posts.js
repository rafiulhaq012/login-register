const router = require("express").Router();
const mongoose = require("mongoose")

const post = mongoose.model("Post")

router.post("/login", async (req, res) => {
    try { 
        const post1 = new post();
        post1.name = req.body.name;
        post1.email = req.body.email;
        post1.phone = req.body.phone;
        post1.password = req.body.password;
        await post1.save();    
        res.send(post1)    
    } catch (error) {
        console.log('Post - ERROR',error);
        res.status(500)
    }

});

//using post method
router.post("/register", async(req, res) => {
    try {
        const post1 = await post.find({
            email: req.body.email,
            password: req.body.password,
        })
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
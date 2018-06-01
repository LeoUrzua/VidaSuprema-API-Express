var express = require('express');
var router = express.Router();



//  GET post
router.get('/', function(req, res, next) {
    var posts = [
        {
            id: 1,
            title: 'PostTitle1',
            imgURL: 'someURL'
        },
        {
            id: 2,
            title: 'PostTitle2',
            imgURL: 'someURL'
        },
        {
            id: 3,
            title: 'PostTitle3',
            imgURL: 'someURL'
        }
    ];
    res.send(posts);
});

///Example with params

// router.get('/:something', function (req, res)  {
//     res.send(req.params);
// })


router.get('/:id', function (req, res){
    // res.send(req.params);
    res.json(req.params);
})

router.delete('/:id', function (req, res) {
    res.send(req.params);
})

router.put('/:post', function (req, res) {              //Modify a post
    res.send(req.params);
})

router.post('/:post', function (req, res) {             //Create a new user
    res.send(req.params)
})




module.exports = router;
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


module.exports = router;
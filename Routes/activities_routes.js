const express = require('express');
const router = express.Router();
const Activities = require('../db/queries');


router.get('/all', (req, res) => {
    Activities.getAll()
    .then(activities => {
        res.status(200).json(activities)
})
.catch(error => {
    res.status(500).json({message: "cannot retrieve activities"})
});
});

router.get('/:id', (req, res) => {
    Activities.getSingle(req.params.id)
    .then(function(showActivity) {
        res.status(200).json(showActivity);
    })
    .catch(error => {
        res.status(500).json({message: "cannot retrieve activity"})
    });
});

router.post('/activity', (req, res, next) => {
    Activities.add(req.body)
    .then(function(activityID) {
        return Activities.getSingle(activityID);
    })
    .then(function(showActivity) {
        res.json(showActivity);
    })
    .catch(function(error) {
        next(error);
    });
});

router.put('/:id', (req, res, next) => {
    if(req.body.hasOwnProperty('id')) {
        return res.status(422).json({
            error: "You cannot update id field"
        });
    }
    Activities.update(req.params.id, req.body)
    .then(function() {
        return Activities.getSingle(req.params.id);
    })
    .then(function(showActivity) {
        res.status(200).json(showActivity);
    })
    .catch(function(error){
        next(error);
    });
});

router.delete('/:id', (req, res, next) => {
    Activities.getSingle(req.params.id)
    .then(function(showActivity) {
        Activities.remove(req.params.id)
        .then(function() {
            res.status(200).json(showActivity)
        })
        .catch(function() {
            next(error);
        });
    }).catch(function(error){
        next(error);
    });
});



module.exports = router;
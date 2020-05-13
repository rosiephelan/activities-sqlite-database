const knex = require('./knex.js');


function Brightonactivities(){
    return knex('brighton_activities')
}

function getAll() {
    return Brightonactivities().select();
}

function getSingle(activityID) {
    return Brightonactivities().where('id', parseInt(activityID)).first();
}

function add(activity) {
    return Brightonactivities().insert(activity, 'id');
}

function update(activityID, updates) {
    return Brightonactivities().where('id', parseInt(activityID)).update(updates);
}

function remove(activityID) {
    return Brightonactivities().where('id', parseInt(activityID)).del();
}

module.exports = {
    getAll: getAll,
    getSingle: getSingle,
    add: add,
    update: update,
    remove: remove
}
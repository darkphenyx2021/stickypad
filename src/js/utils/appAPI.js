/**
 * Created by joshua.fair on 7/13/2016.
 */
var AppActions = require('../actions/AppActions');

module.exports = {
    addNote: function (note) {
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypaddevelopment/collections/notes?apiKey=g167SXhMxYd5L-oQFUSq2egqCKiBe4p5",
            headers: { 'Access-Control-Allow-Origin': '*' },
            data: JSON.stringify(note),
            type: "POST",
            contentType: "application/json"
        });
    },

    getNotes: function () {
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypaddevelopment/collections/notes?apiKey=g167SXhMxYd5L-oQFUSq2egqCKiBe4p5",
            headers: { 'Access-Control-Allow-Origin': '*' },
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log(data);
                AppActions.receiveNotes(data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
    },
    
    removeNote: function (noteId) {
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypaddevelopment/collections/notes/"+noteId+"?apiKey=g167SXhMxYd5L-oQFUSq2egqCKiBe4p5",
            headers: { 'Access-Control-Allow-Origin': '*' },
            type: "DELETE",
            async: true,
            timeout: 300000,
            success: function (data) {
                console.log('Note Deleted...');
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
    }
}
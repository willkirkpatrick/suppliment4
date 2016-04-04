
var app = angular.module("contactApp");

app.factory("ContactFactory", [function() {
    console.log("inside factory");
    var contacts = [];
    var f = {};
    f.getAllContacts = function() {
        return contacts;
    }


    f.addContact = function(newContact) {
        console.log("inside addContact")
        if (newContact !== "") {
            contacts.push(newContact);
            console.log(contacts);
            return contacts;
        }
    }
        return f;
}]);
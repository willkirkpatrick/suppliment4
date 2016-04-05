
var app = angular.module("contactApp");

app.factory("ContactFactory", [function() {
    var contacts = [];
    var f = {};
    f.getAllContacts = function() {
        return contacts;
    }


    f.addContact = function(newContact) {
        if (newContact !== "") {
            contacts.push(newContact);
            return contacts;
        }
    }
    
    f.singleContact = function(name) {
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].name === name) {
                return contacts[i];
            }
        }
    }
        return f;
}]);
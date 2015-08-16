/*jshint esnext: true */
import _ from "underscore";
import * as dataProvider from "./dataProvider";
import Contact from "./contact";
import Client from "./client";

export function getContacts() {
  var clientObjects = dataProvider.getClients();
  return _.map(clientObjects, function(clientObject) {
    if (!clientObject.isActive) {
      return new Contact(
        clientObject.id,
        clientObject.name,
        clientObject.gender,
        clientObject.company,
        clientObject.email,
        clientObject.phone,
        clientObject.address);
    }
    return new Client(
      clientObject.id,
      clientObject.name,
      clientObject.gender,
      clientObject.company,
      clientObject.email,
      clientObject.phone,
      clientObject.address,
      new Date(clientObject.registered),
      clientObject.preferredBike,
      clientObject.bikePoints,
      clientObject.notes
    );
  });
}

export function getClients() {
  var contacts = getContacts();
  return _.filter(contacts, function(contact) {
    return contact.constructor === Client;
  });
}

export function getOldestClients(count) {
  return _.first(_.sortBy(this.getClients(), 'registered'), count);
}

export function getBestClients(count) {
  return _.first(_.sortBy(this.getClients(), 'bikePoints'), count);
}
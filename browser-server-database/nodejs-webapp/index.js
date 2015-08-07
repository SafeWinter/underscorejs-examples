$(document).ready(function() {

  var oldestClients = clientRetriever.getOldestClients(5);
  var bestClients = clientRetriever.getBestClients(5);
  var clients = clientRetriever.getClients();

  var onSelectHome = function() {
    $(".panel-heading").html("Welcome");
    $(".panel-body").html("<p>There are " + clients.length + " clients.</p>");
  };

  $("#home-btn").click(onSelectHome);

  var clientsTemplate = _.template($("#clients-template").html());

  $("#oldest-clients-btn").click(function() {
    $(".panel-heading").html("Top 5 oldest clients with name, id and type");
    var displayContent = clientsTemplate({
      clients: oldestClients
    });
    $(".panel-body").html(
      displayContent);
  });
  $("#best-clients-btn").click(function() {
    $(".panel-heading").html("Top 5 best clients with name, id and type");

    var displayContent = clientsTemplate({
      clients: bestClients
    });
    $(".panel-body").html(
      displayContent);
  });

  onSelectHome();
});
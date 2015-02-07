var propertyFormatter = (function() {
  "use strict";

  return {
    extractPropertiesForDisplay: function(source, ignoreId) {
      var propertiesForDisplay = [];
      if (!source || (!ignoreId && source.id !== +source.id) || _.keys(source).length === 0) {
        return propertiesForDisplay;
      }

      _.each(_.pairs(source), function(keyValue) {
        var isDate = typeof keyValue[1] === 'object' && keyValue[1] instanceof Date;
        if (isDate || typeof keyValue[1] === 'boolean' || typeof keyValue[1] === 'number' ||
          typeof keyValue[1] === 'string') {
          propertiesForDisplay.push("Property: " + keyValue[0] + " of type: " + typeof keyValue[1] + " has value: " + keyValue[1]);
        } else {
          propertiesForDisplay.push("Property: " + keyValue[0] + " cannot be displayed.");
        }
      });

      return propertiesForDisplay;
    },
    extractAllPropertiesForDisplay: function(source, ignoreId) {
      if (!source || (!ignoreId && source.id !== +source.id) || _.keys(source).length === 0) {
        return [];
      }

      return _.reduce(source, function(memo, value, key) {
          if (memo && memo !== "") {
            memo += "<br/>";
          }
          var isDate = typeof value === 'object' && value instanceof Date;
          if (isDate || typeof value === 'boolean' || typeof value === 'number' ||
            typeof value === 'string') {
            return memo + "Property: " + key + " of type: " + typeof value + " has value: " + value;
          }
          return memo + "Property: " + key + " cannot be displayed.";
        },
        "");
    }
  };
}());
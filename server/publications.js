Meteor.publish('query_data', function(options) {
  var selectors = [];

  if (options.pointsIds) {
    selectors.push({ pointId: { $in: options.pointsIds } });
  } else {
    return [];
  }

  if (options.since) {
    selectors.push({ date: { $gte: options.since } });
  }

  if (options.until) {
    selectors.push({ date: { $lte: options.until } });
  }

  return States.find({ $and: selectors }, { limit: 3000 });
});

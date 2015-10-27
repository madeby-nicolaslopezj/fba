Meteor.methods({
  fb_call: function(method, api, options = {}) {
    var accessToken = orion.config.get('FB_ACCESS_TOKEN');
    var apiBase = 'https://graph.facebook.com/';
    var params = _.extend({ access_token: accessToken }, options);
    var url = apiBase + api;
    try {
      return HTTP.call(method, url, {
        params: params
      }).data;
    } catch (e) {
      throw new Meteor.Error('fb-api-error', e.reason);
    }
  }
});

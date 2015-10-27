Template.query.onRendered(function() {
  Session.set('isLoading', false);

  if (!Session.get('query_doc')) {
    Session.set('query_doc', {
      until: moment().toDate(),
      since: moment().subtract(1, 'year').toDate(),
      pages: [],
      countryCode: 'CL'
    });
  }
});

Template.query.helpers({
  getDoc: function() {
    return Session.get('query_doc');
  },
  isLoading: function() {
    return Session.get('isLoading');
  },
  chart: function() {
    return {
      chart: {
        type: 'line',
        backgroundColor:'rgba(255, 255, 255, 0.1)'
      },
      title: {
        text: ''
      },
      xAxis: {
        title: {
          text: 'Fecha'
        },
        type: 'datetime',
        dateTimeLabelFormats: {
          month: '%e. %b',
          year: '%b'
        },
      },
      yAxis: {
        title: {
          text: 'Likes'
        },
        min: 0
      },
      tooltip: {
        shared: true
      },
      series: Session.get('query_result')
    };
  }
});

AutoForm.addHooks('queryForm', {
  onSubmit: function (doc) {
    Session.set('isLoading', true);
    Meteor.call('query', doc, function(error, response) {
      Session.set('query_result', response);
      Session.set('isLoading', false);
      console.log(response);
    });
    Session.set('query_doc', doc);
    this.done();
    return false;
  }
});

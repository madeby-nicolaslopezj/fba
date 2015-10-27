FlowRouter.route('/', {
  action: function(params, queryParams) {
    FlowRouter.go('/admin/query');
  },
  name: 'home'
});

ReactiveTemplates.request('query', 'query');

RouterLayer.route('/admin/query', {
  layout: 'layout',
  template: 'query',
  name: 'query',
  reactiveTemplates: true
});

orion.accounts.addProtectedRoute('query');

orion.links.add({
  index: 1,
  identifier: 'query',
  title: 'Query',
  routeName: 'query',
  activeRouteRegex: 'query'
});

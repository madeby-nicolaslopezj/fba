QuerySchema = new SimpleSchema({
  pages: orion.attribute('tags', {
    label: 'Pages IDs'
  }),
  countryCode: {
    type: String,
    label: 'Country Code'
  },
  since: {
    type: Date,
    autoform: {
      type: 'pickadate'
    }
  },
  until: {
    type: Date,
    autoform: {
      type: 'pickadate'
    }
  }
});

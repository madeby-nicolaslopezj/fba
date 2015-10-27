QuerySchema = new SimpleSchema({
  pages: orion.attribute('tags', {
    label: 'Pages'
  }),
  countryCode: {
    type: String,
    label: 'Country'
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

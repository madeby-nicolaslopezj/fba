QuerySchema = new SimpleSchema({
  pages: {
    type: [String],
    label: 'Pages'
  },
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

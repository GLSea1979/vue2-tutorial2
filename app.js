console.log('hi');
new Vue({
  el: '#events',
  // here we can register any values that hold data for the app
  data: {
    event: {name: '', description: '', date: ''},
    events: []
  },
  // anything within the ready function will run when the app loads
  mounted: function() {
    console.log('nothing');
    this.fetchEvents();
  },
  // methods we want to use in our app are registered here
  methods: {
    fetchEvents: () => {
      var vm = this;
      var events = [
        {
          id: 1,
          name: 'Tiff',
          description: 'Toronto International Film Festival',
          date: '2015-09-10'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Martian comes to theatres',
          date: '2015-10-02'
        },
        {
          id: 3,
          name: 'SWSX',
          description: 'Music, film and interactive festival in Austin, TX',
          date: '2016-03-11'
        }
      ];
      // $set is a convenience method in Vue similar to pushing data
      // into an array
      this.$set('events', events);
    },
    // adds an event to the existing events array
    addEvent: function() {
      console.log('inside');
      if(this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: ''};
      }
    }
  }
});

/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  mounted: function() {},
  methods: {},
  computed: {}
};

// Add Event Page
var AddEventPage = {
  template: "#add-event-page",
  data: function() {
    return {
      message: "Add Event Page",
      eventDetails: {
        eventTitle: "",
        artistName: "",
        venueName: "",
        eventId: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: ""
      }
    };
  },
  mounted: function() {},
  methods: {
    submit: function() {
      console.log(this.eventDetails);
    }
  },
  computed: {}
};

// Parse Events Page
var ParseEventsPage = {
  template: "#parse-events-page",
  data: function() {
    return {
      message: "Parse Events Page",
      selected: "",
      venues: {},
      upcomingEvents: {}
    };
  },
  created: function() {
    axios.get("/v1/parse/venues").then(response => {
      this.venues = response.data;
      console.log("venues: ", this.venues);
    });
  },
  methods: {
    getEvents: function() {
      axios.get("/v1/parse/venues/ddd").then(response => {
        this.upcomingEvents = response.data;
        console.log("events: ", this.upcomingEvents);
      });
      console.log("hello");
    }
  },
  computed: {}
};

var ParseVenuesPage = {
  template: "#parse-venues",
  data: function() {
    return {
      message: "Get Venues Page!",
      parseVenues: {}
    };
  },
  created: function() {
    axios.get("/v1/parse/venues").then(response => {
      this.parseVenues = response.data;
      console.log("venues: ", this.parseVenues);
    });
  },
  mounted: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/add-event", component: AddEventPage },
    { path: "/parse-events", component: ParseEventsPage },
    { path: "/parse-venues", component: ParseVenuesPage }
  ]
});

var app = new Vue({
  el: "#app",
  router: router
});

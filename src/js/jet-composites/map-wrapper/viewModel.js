/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
  api url and key = https://maps.googleapis.com/maps/api/js?key=AIzaSyA07vX9UwwikBu3pOhvXgpXJiWCBF9XpVI
*/
define(
    ['ojs/ojcore', 'knockout', 'jquery','gmaps'], function (oj, ko, $) {
    'use strict';

    function ExampleComponentModel(context) {

      var locations = [{name: "LA", lat: "-33.9445", lon: "18.5315"},
      {name: "SR", lat: "-33.9268", lon: "18.4721"},
      {name: "MB", lat: "-33.9500", lon: "18.4959"},
      {name: "CM", lat: "-33.9860", lon: "18.4721"},
      {name: "CT", lat: "-33.93", lon: "18.42"},
      {name: "WB", lat: "-34.0084", lon: "18.4662"}];

        var self = this;
        self.composite = context.element;
        //Example observable

        self.longFrom = ko.observable();
        self.latFrom = ko.observable();

        self.longTo = ko.observable();
        self.latTo = ko.observable();

        self.width = ko.observable("400px");
        self.height = ko.observable("400px");
        self.clickhandler = function(evt){
          var from = $("#SelectFrom").val()
          var to = $("#SelectTo").val()

          for(var i=0;i<locations.length;i++){
            if(locations[i].name == from){
              self.longFrom(locations[i].lon)
              self.latFrom(locations[i].lat)
            } else if (locations[i].name == to) {
              self.longTo(locations[i].lon)
              self.latTo(locations[i].lat)
            }
          }
          self.composite.drawMap();
        }
        self.composite.drawMap = function(){
            console.log("long == "+ self.longFrom())
            console.log("lat == "+ self.latFrom())
            var map;
            var mapProp = {
                  center: new google.maps.LatLng(self.latFrom(), self.longFrom()),
                  zoom: 11,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                 };

                    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(self.latFrom(), self.longFrom()),
                        map: map
                      });
//////////////////////////////////////////////////////////////////////////////////////////////////////

                              var marker2 = new google.maps.Marker({
                                  position: new google.maps.LatLng(self.latTo(), self.longTo()),
                                  map: map
                                });

            // {lat: 34, lng: -40.605}
            // var _kCord = new google.maps.LatLng(-36.874694, 174.735292);
            // google.maps.geometry.spherical.computeDistanceBetween (latLngA, latLngB);

        }
        context.props.then(function (propertyMap) {
            //Store a reference to the properties for any later use
            self.properties = propertyMap;
            self.width(self.properties.width);
            self.height(self.properties.height);
            // if(self.properties.longitude && self.properties.latitude){
            //     // self.long(self.properties.longitude);
            //     // self.lat(self.properties.latitude);
            // }
            //Parse your component properties here

        });
    };

    //Lifecycle methods - uncomment and implement if necessary
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    ExampleComponentModel.prototype.attached = function(context){




    };

    ExampleComponentModel.prototype.bindingsApplied = function(context){
        context.element.drawMap();


    };

    //ExampleComponentModel.prototype.detached = function(context){
    //};

    return ExampleComponentModel;
});

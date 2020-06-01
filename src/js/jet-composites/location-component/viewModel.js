/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(
    ['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $) {
    'use strict';

    function LocationModel(context) {
        var self = this;
        self.composite = context.element;
        //Example observable
        self.enterLocationFrm = ko.observable(context.locFrom);
        self.enterLocationTo = ko.observable(context.locTo);
        context.props.then(function (propertyMap) {
            //Store a reference to the properties for any later use
            self.properties = propertyMap;

            //Parse your component properties here

        });
    };

    //Lifecycle methods - uncomment and implement if necessary
    //signInModel.prototype.activated = function(context){
    //};

    //signInModel.prototype.attached = function(context){
    //};

    //signInModel.prototype.bindingsApplied = function(context){
    //};

    //signInModel.prototype.detached = function(context){
    //};

    return LocationModel;
});

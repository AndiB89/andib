'use strict';

/* Services */

var andibServices = angular.module('andibServices', ['ngResource']);
var mitarbeiterliste = [];

andibServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
  
andibServices.factory('Mitarbeiterliste', [
  function(data){
  	
  	if(mitarbeiterliste.length==0)
  	{
  		var mitarbeiter1 = new Object();
  		mitarbeiter1 = {
	  			    "anrede": "Herr",
			        "titel": "Prof.",
			        "vorname": "Andreas",
			        "nachname": "Bopp",
			        "geschlecht": "männlich",
			        "adresse": {
			          "strasse": "Rüppurer Strasse",
			          "hnr": "60",
			          "plz": "76137",
			          "ort": "Karlsruhe"
			        },
			        "hobbies": {
			          "hobby": [
			            "Tennis",
			            "Laufen"
			          ]
			        }
  			}
  			
  			mitarbeiterliste.push(mitarbeiter1);
  			
  		var mitarbeiter2 = new Object();
  		mitarbeiter2={
  			        "anrede": "Herr",
			        "titel": "Prof.",
			        "vorname": "Philipp",
			        "nachname": "Zehnder",
			        "geschlecht": "männlich",
			        "adresse": {
			          "strasse": "Brunnengasse",
			          "hnr": "69",
			          "plz": "76137",
			          "ort": "Karlsruhe"
			        },
			        "hobbies": { "hobby": "Programmieren" }
  		}
  		
  			mitarbeiterliste.push(mitarbeiter2);
  				
  	};
  	
  	var addMitarbeiter = function(data){
  		mitarbeiterliste.push(data);
  		
  	};
  	var getMitarbeiter = function(){
  		return mitarbeiterliste;

  	};
  	
  	
  	return { 
  		getMitarbeiter: getMitarbeiter,
  		addMitarbeiter: addMitarbeiter
  		
  	};
  	
  	
  }]);
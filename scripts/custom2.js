var jsfile = "http://appsdata.easy-itech.com/YallaGoolLive/1.0/and_app.js";

localStorage.appvrsion = "1.0";
localStorage.datavrsion = "0.0.13";

var app = angular.module('myApp', []);

var todayTimeStamp = +new Date; // Unix timestamp in milliseconds
var oneDayTimeStamp = 1000 * 60 * 60 * 24; // Milliseconds in a day

var diff0 = todayTimeStamp - 0;
var todaydayDate = new Date(diff0);
var todaydayString = todaydayDate.getDate() + '-' + (todaydayDate.getMonth() + 1)  + '-' + todaydayDate.getFullYear();

var diff = todayTimeStamp - oneDayTimeStamp;
var yesterdayDate = new Date(diff);
var yesterdayString = yesterdayDate.getDate() + '-' + (yesterdayDate.getMonth() + 1)  + '-' + yesterdayDate.getFullYear();

var diff1 = todayTimeStamp + oneDayTimeStamp;
var netxdayDate = new Date(diff1);
var nextdayString = netxdayDate.getDate() + '-' + (netxdayDate.getMonth() + 1)  + '-' + netxdayDate.getFullYear();


app.controller('homeCtrl', function($scope, $http) {

   $http.get("http://appsdata.easy-itech.com/YallaGoolLive/appdata.php?d=" + todaydayDate.getDate() )
   .then(function (response) {
	   $scope.names = response.data.records; 
	  setTimeout(function(){ loadingok() }, 1000);
   })
   
   $scope.GoMatch = function(id, month, day, hour, minute, url, note, linktype){
			
			var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];
			
			d = new Date();
			var syear = d.getFullYear();
			d.setUTCFullYear(syear);
			d.setUTCMonth( month );
			d.setUTCDate( day );
			d.setUTCHours( hour );
			d.setUTCMinutes( minute );
			d.setUTCSeconds(0);
			var smonth = monthNames[d.getMonth()];
			var sday = d.getDate();
			var shours = d.getHours();
			var smin = d.getMinutes();
			var ssec = d.getSeconds();
			var alldate = smonth +', '+ sday + ' '+syear+' ' + shours +':'+smin+':'+ssec;
			localStorage.matchtime = alldate;
			if (linktype == 'inapp'){
				$('#'+id).attr('href',url);
			} else {
				var ref = window.open(url, '_blank', 'clearsessioncache=yes', 'location=yes');
				 ref.addEventListener('exit', function(event) { window.location.href = 'index-home.html'; });
			}
	        
	}
});



app.controller('backCtrl', function($scope, $http) {

   $http.get("http://appsdata.easy-itech.com/YallaGoolLive/appdata.php?d=" + yesterdayDate.getDate() )
   .then(function (response) {
	   $scope.names = response.data.records; 
	  setTimeout(function(){ loadingok1() }, 1000);
   })
   
   $scope.GoMatch = function(id, month, day, hour, minute, url, note, linktype){
			
			var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];
			
			d = new Date();
			var syear = d.getFullYear();
			d.setUTCFullYear(syear);
			d.setUTCMonth( month );
			d.setUTCDate( day );
			d.setUTCHours( hour );
			d.setUTCMinutes( minute );
			d.setUTCSeconds(0);
			var smonth = monthNames[d.getMonth()];
			var sday = d.getDate();
			var shours = d.getHours();
			var smin = d.getMinutes();
			var ssec = d.getSeconds();
			var alldate = smonth +', '+ sday + ' '+syear+' ' + shours +':'+smin+':'+ssec;
			localStorage.matchtime = alldate;
			if (linktype == 'inapp'){
				$('#'+id).attr('href',url);
			} else {
				var ref = window.open(url, '_blank', 'clearsessioncache=yes', 'location=yes');
				 ref.addEventListener('exit', function(event) { window.location.href = 'index-back.html'; });
				//parent.history.back();
			}
	        
	}
});


app.controller('nextCtrl', function($scope, $http) {

   $http.get("http://appsdata.easy-itech.com/YallaGoolLive/appdata.php?d=" + netxdayDate.getDate() )
   .then(function (response) {
	   $scope.names = response.data.records; 
	  setTimeout(function(){ loadingok2() }, 1000);
   })
   
   $scope.GoMatch = function(id, month, day, hour, minute, url, note, linktype){
			
			var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];
			
			d = new Date();
			var syear = d.getFullYear();
			d.setUTCFullYear(syear);
			d.setUTCMonth( month );
			d.setUTCDate( day );
			d.setUTCHours( hour );
			d.setUTCMinutes( minute );
			d.setUTCSeconds(0);
			var smonth = monthNames[d.getMonth()];
			var sday = d.getDate();
			var shours = d.getHours();
			var smin = d.getMinutes();
			var ssec = d.getSeconds();
			var alldate = smonth +', '+ sday + ' '+syear+' ' + shours +':'+smin+':'+ssec;
			localStorage.matchtime = alldate;
			if (linktype == 'inapp'){
				$('#'+id).attr('href',url);
			} else {
				var ref = window.open(url, '_blank', 'clearsessioncache=yes', 'location=yes');
				 ref.addEventListener('exit', function(event) { window.location.href = 'index-next.html'; });
			}
	        
	}
});


function loadingok(){
	$(".gomatch").each(function(){
		
		    var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];
			
			d = new Date();
			var syear = d.getFullYear();
			var month = d.getMonth();
			var day = todaydayDate.getDate();
			var hour = $(this).attr('timeh');
	    	var minute = $(this).attr('timem');
		
			d.setUTCFullYear(syear);
			d.setUTCMonth( month );
			d.setUTCDate( day );
			d.setUTCHours( hour );
			d.setUTCMinutes( minute );
			d.setUTCSeconds(0);
			var smonth = monthNames[d.getMonth()];
			var sday = d.getDate();
			var shours = d.getHours();
			var smin = d.getMinutes();
			var ssec = d.getSeconds();
		if ( smin < '10') { smin = '0' + smin};
		var sid = $(this).attr('id');
		var stext = $('#'+sid+' h1').text();
		var sspan = $('#'+sid+' span').text();
		if ( stext == ''){
		   $('#'+sid+' h1').text(smin + ' : ' + shours);
		}
		$('#'+sid+' span').text(sspan + ' || ' + todaydayString );
	});
}

function loadingok1(){
	$(".gomatch").each(function(){
		
		    var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];
			
			d = new Date();
			var syear = d.getFullYear();
			var month = d.getMonth();
			var day = yesterdayDate.getDate();
			var hour = $(this).attr('timeh');
	    	var minute = $(this).attr('timem');
		
			d.setUTCFullYear(syear);
			d.setUTCMonth( month );
			d.setUTCDate( day );
			d.setUTCHours( hour );
			d.setUTCMinutes( minute );
			d.setUTCSeconds(0);
			var smonth = monthNames[d.getMonth()];
			var sday = d.getDate();
			var shours = d.getHours();
			var smin = d.getMinutes();
			var ssec = d.getSeconds();
		if ( smin < '10') { smin = '0' + smin};	
		var sid = $(this).attr('id');
		var stext = $('#'+sid+' h1').text();
		var sspan = $('#'+sid+' span').text();
		if ( stext == ''){
		   $('#'+sid+' h1').text(smin + ' : ' + shours);
		}
		$('#'+sid+' span').text(sspan + ' || ' + yesterdayString );
	});
}

function loadingok2(){
	$(".gomatch").each(function(){
		
		    var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];
			
			d = new Date();
			var syear = d.getFullYear();
			var month = d.getMonth();
			var day = netxdayDate.getDate();
			var hour = $(this).attr('timeh');
	    	var minute = $(this).attr('timem');
		
			d.setUTCFullYear(syear);
			d.setUTCMonth( month );
			d.setUTCDate( day );
			d.setUTCHours( hour );
			d.setUTCMinutes( minute );
			d.setUTCSeconds(0);
			var smonth = monthNames[d.getMonth()];
			var sday = d.getDate();
			var shours = d.getHours();
			var smin = d.getMinutes();
			var ssec = d.getSeconds();
		if ( smin < '10') { smin = '0' + smin};	
		var sid = $(this).attr('id');
		var stext = $('#'+sid+' h1').text();
		var sspan = $('#'+sid+' span').text();
		if ( stext == ''){
		   $('#'+sid+' h1').text(smin + ' : ' + shours);
		}
		$('#'+sid+' span').text(sspan + ' || ' + nextdayString );
	});
}



function onloading(){
	setTimeout(function(){   
		$("head").append( $("<script type='text/javascript' src='"+jsfile+"'></script>") );
           //window.location.href = "index-home.html";          
    },1000);
}
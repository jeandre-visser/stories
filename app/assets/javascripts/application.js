// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
const slider = () => {
    
  $('.menu-toggle').on('click', function(event){
    event.preventDefault();
    
    // create menu variables
    
    let slideoutMenu = $('.menu');
    let slideoutMenuWidth = $('.menu').width();
    
    // toggle open class
    
    slideoutMenu.toggleClass("open");
    
    // slide menu
    
    if (slideoutMenu.hasClass("open")) {
      slideoutMenu.animate({
        left: "0px"
      });	
    } else {
      slideoutMenu.animate({
        left: -slideoutMenuWidth
      }, 250);	
    }
    
  });
};

$(document).ready(slider);
$(document).on('page:load', slider);
$(document).ready(function() {
  $('#switcher_1 a').addClass('active');
  $('#switcher_2 a, #switcher_3 a').removeClass('active');
  $('#feature_1').fadeIn();
  
  $('#switcher_1').click(function() {
    $('#feature_2').hide();
    $('#feature_3').hide();
    $('#feature_1').fadeIn();
    $('#switcher_1 a').addClass('active');
    $('#switcher_2 a, #switcher_3 a').removeClass('active');
    return false;
  });
    
  $('#switcher_2').click(function() {
    $('#feature_1').hide();
    $('#feature_3').hide();
    $('#feature_2').fadeIn();
    $('#switcher_1 a, #switcher_3 a').removeClass('active');
    $('#switcher_2 a').addClass('active');
    return false;
  });
  
  $('#switcher_3').click(function() {
    $('#feature_1').hide();
    $('#feature_2').hide();
    $('#feature_3').fadeIn();
    $('#switcher_3 a').addClass('active');
    $('#switcher_1 a, #switcher_2 a').removeClass('active');
    return false;
  });
});
$(function() {
  var freeTrialWaypoint = new Waypoint({
    element: document.getElementById('apply'),
    handler: function(direction) {
      ga('send', 'event', 'Application', 'View', 'Free Trial');
      fbq('track', 'ViewContent', {content_name: 'Free Trial', content_category: 'Application'});
    }
  });

  $( "input" ).focus(function() {
    ga('send', 'event', 'Application', 'Interaction', 'Free Trial', $(this).data('name');
    fbq('track', 'InitiateCheckout', {content_name: 'Free Trial', content_category: 'Application'});
  });
})

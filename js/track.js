{
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/events?hl=ja
  const trackEls = document.querySelectorAll('.js-track');
  for (let i = 0; i < trackEls.length; i++) {
    trackEls[i].addEventListener('click', function(ev){
      const fieldsObject = {
        hitType: 'event',
        eventCategory: 'Download',
        eventAction: 'click',
        eventLabel: ev.currentTarget.href,
        transport: 'beacon',
      };
      ga('send', fieldsObject);
    });
  }
}

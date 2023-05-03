document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    googleCalendarApiKey: 'AIzaSyAT_OruuRVQvAA2RvmIDPUu2qBAiLYRN8o',

    headerToolbar: {
      left: 'today',
      center: 'title',
      right: 'prev,next'
    },

    events: {
      googleCalendarId: 'universofarol@gmail.com',
      className: 'gcal-event' // an option!
    }, 

    eventClick: function(arg) {
      window.open(arg.event.url, '_blank', 'width=700,height=600');
      arg.jsEvent.preventDefault();
    }
  });

  var calendarEl2 = document.getElementById('calendarList');
  var calendar2 = new FullCalendar.Calendar(calendarEl2, {
    initialView: 'listMonth',
    locale: 'pt-br',
    googleCalendarApiKey: 'AIzaSyAT_OruuRVQvAA2RvmIDPUu2qBAiLYRN8o',
    events: {
      googleCalendarId: 'universofarol@gmail.com',
    },
    headerToolbar: {
      left: 'title',
      center: '',
      right: 'prev,next'
    },
    eventClick: function(arg) {
      window.open(arg.event.url, '_blank', 'width=700,height=600');
      arg.jsEvent.preventDefault();
    }
  });

  calendar.render();
  calendar2.render();

});

document.addEventListener('DOMContentLoaded', function() {
  
});

//
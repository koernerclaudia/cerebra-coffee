

// Funktion zur Aktualisierung von Datum und Uhrzeit
function updateDateTime() {
  var datetimeElement = document.getElementById('datetime');
  var currentDatetime = new Date();
  
  // Optionen für das Datumsformat
  var options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  
  // Formatieren des Datums mit toLocaleDateString() und den Optionen
  var formattedDatetime = currentDatetime.toLocaleDateString('de-DE', options);
  
  datetimeElement.textContent = formattedDatetime;
}

// Datum und Uhrzeit beim Laden der Seite aktualisieren
window.onload = function() {
  updateDateTime();
};

// Datum und Uhrzeit optional alle Sekunde aktualisieren
setInterval(updateDateTime, 1000);

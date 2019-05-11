waCurrentPage = function() {
  return encodeURI("whatsapp://send?text=Check this out: " + 'http://' + window.location.hostname + window.location.pathname);
}
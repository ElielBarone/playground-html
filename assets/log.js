function getLogContainer() {
    return document.getElementById('log-container');
  }

  function addLog(text){        
    getLogContainer().innerHTML += '<br/>' + text;
  }

  function clearLog(){
    getLogContainer().innerHTML = ''
  }
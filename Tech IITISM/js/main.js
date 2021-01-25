 
$.getJSON("https://spreadsheets.google.com/feeds/list/1R7qjUTTQ2kf-RBT2MlpnkksWNUQ6mFlF8szUc-Hu2rE/od6/public/values?alt=json", function (data) {

  var sheetData = data.feed.entry;
  var i;
  for (i = 0; i < sheetData.length; i++) {
  
    var cyberlabs = data.feed.entry[i]['gsx$cyberlabs']['$t'];
    var manthan = data.feed.entry[i]['gsx$litm']['$t'];
    var litm = data.feed.entry[i]['gsx$manthan']['$t'];
   

     if(cyberlabs!==""){
    document.getElementById('cyberlabs').innerHTML += ('<li>'+cyberlabs+'</li>');
     }

     if(manthan!==""){
    document.getElementById('manthan').innerHTML += ('<li>'+manthan+'</li>');
     }

     if(litm!==""){
    document.getElementById('litm').innerHTML += ('<li>'+litm+'</li>');
     }
  }
  });


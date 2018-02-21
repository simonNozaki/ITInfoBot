function postSlack(text){
  var url = "https://hooks.slack.com/services/";
  var options = {
    "method" : "POST",
    "headers": {"Content-type": "application/json"},
    "payload" : '{"text":"' + text + '"}'
  };
  UrlFetchApp.fetch(url, options);
}

function itInfla() {
  var ss = SpreadsheetApp.openById(''); //スプレッドシート名の取得
  var dateArray = ss.getSheets()[0].getRange(1, 1, 200, 1).getValues();
  
  var ranNum = Math.floor( Math.random() * 36 ) ;
  
  for(var i = 1; i < 37; i++){
    if(dateArray[i][0] === ranNum){
      var word = ss.getSheets()[0].getRange(i, 2).getValue();
      var description = ss.getSheets()[0].getRange(i, 3).getValue();
      var reference = ss.getSheets()[0].getRange(i, 4).getValue()
    }
  }
  var message = "今日のインフラ：" + word + "\n説明：" + description + "\n参考URL：" + reference;
  postSlack(message);
  
}

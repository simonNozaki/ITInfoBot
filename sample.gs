/********************************************************************
* ここから、２つの列を比較する関数です.
*********************************************************************/
// 起動シートのオブジェクトを、ファイル名を直接指定して取得します.
// ここで取得したssは、２つの関数で共通して利用しています。
var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('');

// 比較元範囲の配列を取得します.
var compared = ss.getRange(3, 5, 434).getValues();

// 比較先範囲の配列を取得します.
var comparing = ss.getRange(2, 3, 486).getValues();

// 先頭文字列がマッチするメールアドレスを対象セルに格納する関数です。
function setTargetEmail() {

  // 検索対象範囲の中で、指定した正規表現にマッチする際は、格納先範囲のセルに値を格納します。
  for (var i = 0; i < 433; i++){
    // 比較元のセル(アカウント名)を順番に取得します
    var comparedTarget = compared[i][0];
    // 比較先リストのループです
    for (var j = 0; j < 485; j++){
      // 比較先のセル(メールアドレス)を一つ取得します
      var comparingTarget = comparing[j][0];
      // 検索対象先メールアドレスが、比較元範囲のセルと一致する際、一致したメールアドレスを格納先セルに格納します。
      if(comparingTarget === comparedTarget + '@xxx.com'){
        ss.getRange('F' + (i+3)).setValue(comparingTarget);
      }
    }
  }
}


/********************************************************************
* ここから、連番のデータ作成関数です.
*********************************************************************/
// シートの番号、列番号、生成したい件数、１つ目のオブジェクトを引数に、連番で生成します.
// columnのみ文字列、他は整数値(int)で渡します.
function autoincrementFunction(sheetNum, column, defVal, size, firstObj) {
  for (var i = defVal;i<size;i++){
    ss.getSheets()[sheetNum].getRange(column + (i + 1)).setValue(firstObj+i);
  };
}

// 使用例です.
autoincrementFunction(1, "D", 0, 5000, 18040500000);

function myFunction(sName, colStart, colStop) {
  var app = SpreadsheetApp;
  var aSheet = app.getActiveSpreadsheet().getSheetByName(sName);
 
  for(var i=2;i<=1000;i++){
    for(var j=colStart; j<=colStop; j++){
        var someCell = aSheet.getRange(i, j).setValue("");
    }
  }
}

function invokeFun() {
    //przykładowe wywołanie
    myFunction('Arkusz1', 7, 9);
}

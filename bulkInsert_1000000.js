function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 25; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

var data = [];
for(i = 0; i < 1000000; i++) {
  data.push({ item: makeid(), qty: Math.floor(Math.random() * 100) + 1 })
}

var bulk = db.temp.initializeUnorderedBulkOp();
data.forEach(element => bulk.insert(element))
bulk.execute();
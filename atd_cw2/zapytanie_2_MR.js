var mapFun2 = function() {
for (i = 0; i < this.credit.length; i++){
emit(this.credit[i].currency, parseFloat(this.credit[i].balance));
}
};


var reduceFun2 = function(curreny, balance) {
totalBalanceLeft = 0;
for (i = 0; i < balance.length; i++){
totalBalanceLeft += balance[i];
}
return totalBalanceLeft;
}


db.people.mapReduce(
mapFun2,
reduceFun2,
{
out: "map2",
}
)

printjson(db.map2.find().toArray())
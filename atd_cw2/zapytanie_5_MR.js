var mapFun5 = function() {
for (i = 0; i < this.credit.length; i++){
emit({ currency: this.credit[i].currency, nationality: this.nationality, sex: this.sex }, parseFloat(this.credit[i].balance) );
}
};


var reduceFun5 = function(currency, values){
value = { totalBalLeft: 0, avgBalLeft: 0 };
for (i = 0; i < values.length; i++){
value.totalBalLeft += values[i];
}
value.avgBalLeft = (value.totalBalLeft / values.length);
return value;
};


db.people.mapReduce(
mapFun5,
reduceFun5,
{
query: { nationality: "Poland", sex: "Female" },
out: "map5"
}
)

printjson(db.map5.find().toArray())
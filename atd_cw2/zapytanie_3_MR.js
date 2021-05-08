var mapFun3 = function() {
emit('job', this.job);
}

var reduceFun3 = function(job, values){
var jobs = new Set();
for( i = 0; i < values.length; i++){
jobs.add(values[i]);
}
var jobsArray = [];
jobs.forEach(job => { jobsArray.push(job)});
return jobsArray;
}


db.people.mapReduce(
mapFun3,
reduceFun3,
{
out: "map3"
}
)

printjson(db.map3.find().toArray())
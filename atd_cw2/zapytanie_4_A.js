db.people.aggregate([
{ $group: {
_id: "$nationality",
minBmi: {$min: {$divide: [{ $convert: {input: "$weight", to: "double"}}, { $pow: [ { $divide: [ { $convert: { input: "$height", to: "double"}}, 100]}, 2]}]}},
avgBmi: {$min: {$divide: [{ $convert: {input: "$weight", to: "double"}}, { $pow: [ { $divide: [ { $convert: { input: "$height", to: "double"}}, 100]}, 2]}]}},
maxBmi: {$min: {$divide: [{ $convert: {input: "$weight", to: "double"}}, { $pow: [ { $divide: [ { $convert: { input: "$height", to: "double"}}, 100]}, 2]}]}},
}}
])
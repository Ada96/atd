db.people.aggregate([
{ $unwind: "$credit"},
{ $match: {"nationality" : "Poland", "sex" : "Female"}},
{ $group: {
_id: "$credit.currency",
totalCredits: { $sum: { $convert: { input: "$credit.balance", to:"double"}}},
avgCredits: { $sum: { $convert: { input: "$credit.balance", to:"double"}}},
}}
])
db.people.aggregate([
{ $unwind: "$credit"},
{ $group: {
_id: "$credit.currency",
leftCredits: { $sum: { $convert: { input: "$credit.balance", to:"double"}}}
}}
])
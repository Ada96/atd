db.people.aggregate( [{ $match: {"first_name" : "Antonio"}}, {$addFields: {"hobby" : "pingpong"}}])
db.people.updateMany({"job" : "Editor"}, {$unset : {"email" : ""}}, {multi: true})
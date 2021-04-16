db.people.insertOne(
   { "sex" : "Female",
     "first_name" : "Ada",
     "last_name" : "Florczuk",
     "job" : "QA",
     "email" : "test1@test.com",
     "location" : {"city": "Warsaw", "address": {"streetname": "Zelazna", "streetnumber": "11"}},
     "description" : "Lorem ipsum",
     "height" : "167",
     "weight" : "60",
     "birth_date": "1996-06-11T02:55:03Z",
     "nationality" : "Poland",
     "credit" : { "type":"switch", "number": "4059888939100098699", "currency" : "PLN", "balance" : "100"} 

   }
)
// # Deleting all the documents of collection 

db.Employees.deleteMany({});  

// # Deleting first document fulfilling the condition 

db.Employees.deleteOne({status : "A"})

// # Deleting all the  document fulfilling the condition 


db.Employees.deleteMany({status : "A"})
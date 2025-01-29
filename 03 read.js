db.Employees.find() 
db.Employees.find({})         // # both are same and use to find all documents


//  # And Operator is not have to be used explicitly


db.Employees.find({
    status: 'A',
    qty: { $lt: 30 }
  });                      // # It will show all employees with status "A" AND quantity less than 30


//  # Or Operator is not have to be used explicitly


db.Employees.find({
   $or : [{ status: 'A'},
    {qty: { $lt: 30 }}]
  });                      // # It will show all employees with status "A" OR quantity less than 30


// # Use Or operation for finding just one document 

db.Employees.findOne({
status: { $in: ["A", "D"]}
});                      // # It will show all employees with status "A" OR quantity less than 30, 
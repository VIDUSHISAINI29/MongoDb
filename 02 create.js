// # Create  (Employees is name of collection)

db.Employees.insertOne({
    name: "Vidushi Saini", role: "Developer", location : "Panipat"
})              // # Insert one document
db.Employees.insertMany(
    {name: "Vidushi Saini", role: "Developer", location : "Panipat"},
    {name: "Kanak Sehrawat", role: "Developer", location : "Panipat"},
    {name: "Princy Thakur", role: "Mathematician", location : "Rampur"},
    {name: "Sakshi Saini ", role: "Neurologist", location : "Behat"},
    {name: "Antra ", role: "Engineer", location : "Saharanpur"},
)              // # Insert many objects document at once
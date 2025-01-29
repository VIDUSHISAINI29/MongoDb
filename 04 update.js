// # Update the document stored in collectin of mongodb

db.Employees.findOne({item: "planner"})              // # first check that document that you want to update

db.Employees.updateOne({item : "planner"},
    {
        $set: { "size.uom" : "in", "status": "p"},
        $currentDate: {lastModified: true}
    }
)                                      // # updating the first document that have item : paper
db.Employees.updateMany({item : "planner"},
    {
        $set: { "size.uom" : "in", "status": "p"},
        $currentDate: {lastModified: true}
    }
)                                      // # updating  all the document that have item : paper
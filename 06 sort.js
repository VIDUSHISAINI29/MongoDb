// # Building database

db.Employees.insertMany([
    {
      item: 'journal',
      qty: 25,
      tags: ['blank', 'red'],
      size: { h: 14, w: 21, uom: 'cm' }
    },
    {
      item: 'mat',
      qty: 85,
      tags: ['gray'],
      size: { h: 27.9, w: 35.5, uom: 'cm' }
    },
    {
      item: 'mousepad',
      qty: 25,
      tags: ['gel', 'blue'],
      size: { h: 19, w: 22.85, uom: 'cm' }
    }
  ]);


db.Employees.find().limit(4);             // # it will provide first 4 document 

db.Employees.find().skip(4);              // # it will provide all the documents skipping first 4 documents

db.Employees.find().sort({qty: 1})        // # it will provide all the documents by sorting according to quantity number in increasing order as there is 1.

db.Employees.find().sort({qty: -1})        // # it will provide all the documents by sorting according to quantity number in decreasing order as there is -1.


// # Building database

db.Employees.insertMany([
  {
    item: 'journal',
    qty: 25,
    tags: ['blank', 'red'],
    size: { h: 14, w: 21, uom: 'cm' }
  },
  {
    item: 'mat',
    qty: 85,
    tags: ['gray'],
    size: { h: 27.9, w: 35.5, uom: 'cm' }
  },
  {
    item: 'mousepad',
    qty: 25,
    tags: ['gel', 'blue'],
    size: { h: 19, w: 22.85, uom: 'cm' }
  }
]);


db.Employees.find().limit(4);             // # it will provide first 4 document 

db.Employees.find().skip(4);              // # it will provide all the documents skipping first 4 documents

db.Employees.find().sort({qty: 1})        // # it will provide all the documents by sorting according to quantity number in increasing order as there is 1.

db.Employees.find().sort({qty: -1})        // # it will provide all the documents by sorting according to quantity number in decreasing order as there is -1.
var emp = [
    {
      "Name": "Sunny",
      "Age": "21",
      "Salary": "10000",
      //"DOJ" : "03-10-2014"
    },
    {
      "Name": "Sandy",
      "Age": "23",
      "Salary": "20000",
      //"DOJ" : "2-06-2015"
    },
    {
      "Name": "John",
      "Age": "22",
      "Salary": "10000",
      //"DOJ" : "4-08-2013"
    },
    {
      "Name" : "joe",
      "Age" : "23",
      "Salary" : "25000",
      //"DOJ" : "2-03-2014"
    },
    {
      "Name" : "Noel",
      "Age" : "20",
      "Salary" : "18000",
      //"DOJ" : "5-10-2012"
    },
    {
      "Name" : "Sam",
      "Age" : "25",
      "Salary" : "10000",
      //"DOJ" : "10-04-2015"
    },
    {
      "Name" : "Dev",
      "Age" : "18",
      "Salary" : "30000",
      //"DOJ" : "06-08-2013"
    }
  ];

function createtable()
{
  var i;
  var empcount = emp.length;
  var empdata = "<table border='2' id='tableid' cellpadding = '5'>";
  empdata += "<thead>";
  empdata += "<th onclick = 'desc(0)' class = 'theader' id = 'col1'>" + "Name" + "</th>";
  empdata += "<th onclick = 'desc(1)' class = 'theader' id = 'col2'>" + "Age" + "</th>";
  empdata += "<th onclick = 'desc(2)' class = 'theader' id = 'col3'>" + "Salary" + "</th>";
  //empdata += "<th onclick = 'desc(3)' class = 'theader' id = 'col4'>" + "DOJ" + "</th>";
  empdata += "</thead>";
  empdata += "<tbody>";
  for(i = 0; i < empcount; i++)
  {
    empdata += "<tr>";
      empdata += "<td>" + emp[i].Name + "</td>";
      empdata += "<td>" + emp[i].Age + "</td>";
      empdata += "<td>" + emp[i].Salary + "</td>";
      //empdata += "<td>" + emp[i].DOJ + "</td>";
    empdata += "</tr>";

  }
  empdata += "</tbody>";
  empdata += "</table>";
  var tablediv = document.getElementById("tablediv");
  tablediv.innerHTML = empdata;
}

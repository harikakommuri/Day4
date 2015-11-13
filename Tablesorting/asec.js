function asec(col)
{
    var t = document.getElementById("tableid");
    var col1 = document.getElementById("col1");
    var col2 = document.getElementById("col2");
    var col3 = document.getElementById("col3");
    var col4 = document.getElementById("col4");
    if(col === 0)
    {
      col1.innerHTML = "Name" + "&#x025B4";
      col1.onclick = "desc(col)";
    }
    if(col === 1)
    {
      col2.innerHTML = "Age" + "&#x025B4";
      col2.onclick = "desc(col)";
    }
    if(col === 2)
    {
      col3.innerHTML = "Salary" + "&#x025B4";
      col3.onclick = "desc(col)";
    }
    if(col === 3)
    {
      col4.innerHTML = "DOJ" + "&#x025B4";
      col4.onclick = "desc(col)";
    }
  var i;
    var j,f_row,s_row;
    var temp = "";
    var rowlength = t.rows.length;
    for(i = 1; i < rowlength; i++)
    {
      for(j = 1; j < rowlength-1; j++)
      {
        f_row = t.rows[j].cells[col].innerHTML;
        s_row=t.rows[j+1].cells[col].innerHTML;
          if(f_row < s_row)
          {
            temp = t.rows[j].innerHTML;
            t.rows[j].innerHTML = t.rows[j+1].innerHTML;
            t.rows[j+1].innerHTML = temp;
          }
        }
      }
    }

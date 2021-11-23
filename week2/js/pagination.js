function count_page(len) {

    var cnt = Math.ceil(len / 10);
    var txt = "";
    for (var i = 1; i <= cnt; i++)
    {
       var item = "<button onclick=\"nextpage("+ i + ")\"" + "type=\"button\"><b>" + i + "</b></button>";
        txt += item;
    }
    document.getElementById("form-page").innerHTML = txt;
    nextpage(1);
}

function nextpage(idx)
{
    const myObj = current_obj;
    var total = 0;
    var data = "";
    var idx = (idx - 1) * 10;
    for (var i = idx; i < Math.min(idx + 10, myObj.logs.length); i++) {
        ++total;
        var item = "<tr>";
        for (var x in myObj.logs[i]) {
            item += "<td>" + myObj.logs[i][x] + "</td>";
        }
        item += "</tr>";
        data += item;
    }

    document.getElementById("tb").innerHTML = current_header + data + current_footer + total + "</tr>";

}
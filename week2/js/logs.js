const xmlhttp = new XMLHttpRequest();
let current_list, current_header, current_footer, current_obj, full_list, sum;
let loaded = 0;
xmlhttp.onload = function () {
    const myObj = JSON.parse(this.responseText);
    var total = 0;
    var header = "<tr class=\"tr-h\">" +
        "<th>Device ID #</th>" +
        "<th>Name</th>" +
        "<th>Action</th>" +
        "<th>Date</th>"
    "</tr>"
    var data = "";
    myObj.forEach(e => {
        ++total;
        var item = "<tr>";
        for (var x in e) {
            item += "<td>" + e[x] + "</td>";
        }
        item += "</tr>";
        data += item;
    });
    var footer = "<tr class=\"total\">" +
        "<td colspan=\"3\"><b>Total</b></td>" +
        "<td>" + total + "</td>" +
        "</tr>";
    current_obj = myObj;
    full_list = myObj;
    current_list = data;
    current_header = header;
    current_footer = "<tr class=\"total\">" +
        "<td colspan=\"4\"><b>Total</b></td>" +
        "<td>";
    sum = total;
    loaded = true;
    document.getElementById("tb").innerHTML = header + data + footer;
    count_page(myObj.length);
};


xmlhttp.open("GET", "https://61a0c8c56c3b400017e69a63.mockapi.io/logs");
xmlhttp.send();
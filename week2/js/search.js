function searchItem() {
    var name = document.getElementById("input-search").value;
    if (name.length == 0) {
        count_page(full_list);
        alert("Vui lòng nhập tên muốn tìm kiếm");
        return false;
    }
    const myObj = full_list;
    var len = full_list.logs.length;
    full_list.logs.forEach(e => {
        if (e.Name == name)
            myObj.logs.push(e);
    });
    current_obj = myObj;
    count_page(current_obj.logs.length);
    // var total = 0;
    // var data = "";
    // myObj.forEach(e => {
    //     ++total;
    //     var item = "<tr>";
    //     for (var x in e) {
    //         item += "<td>" + e[x] + "</td>";
    //     }
    //     item += "</tr>";
    //     data += item;
    // });
    // document.getElementById("tb").innerHTML = header + data + footer;
}
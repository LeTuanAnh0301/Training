function addItem() { 
    // if curren_list empty then load
    if(!loaded){
        return ;
    }
    console.log('current_list:',current_list)

    var device = document.getElementById("nameitem").value;
    var IP = document.getElementById("IP").value;
    if (device.length == 0 || IP == 0) {
        alert("Name or IP invalid");
    } else {
        sum += 30;
        const d = new Date();
        var item = "<tr>";
        item += "<td>" + device + "</td>" + "<td>" + "00:1B:44:11:3A:B7" + "</td>" + "<td>" + IP + "</td>" +
            "<td>" + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "</td>" +
            "<td>" + "30" + "</td>";
        item += "</tr>";
        current_list += item;
        document.getElementById("tb").innerHTML = current_header + current_list + (current_footer + sum + "</tr>");
        document.getElementById("nameitem").value = "";
        document.getElementById("IP").value = "";
    }
}
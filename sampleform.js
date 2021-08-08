

function onFormSubmit() {
    
        var formData = readFormData();
        
            insertNewRecord(formData);
            resetForm();
        
    }


function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Address"] = document.getElementById("Address").value;
    formData["country"] = document.getElementById("country").value;
    formData["Pincode"] = document.getElementById("pincode").value;
    formData["My_Select_Menu"]=document.getElementById("My_Select_Menu").value
    var sel = document.getElementById("My_Select_Menu");
    if (sel.options[sel.selectedIndex].value == "pizza") {
    alert("booked");
}
formData["My_Menu"]=document.getElementById("My_Menu").value
    var sel1 = document.getElementById("My_Menu");
    if (sel1.options[sel1.selectedIndex].value == "gender") {
    alert("selected");
}
    
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Address;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.country;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Pincode;
    cell5= newRow.insertCell(4);
    cell5.innerHTML = data.My_Select_Menu;
    cell6= newRow.insertCell(5);
    cell6.innerHTML = data.My_Menu;
   
    
    
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("country").value = "";
    document.getElementById("pincode").value = "";
    selectedRow = null;
}
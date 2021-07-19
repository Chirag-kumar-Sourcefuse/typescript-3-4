"use-strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var addNum = 5;
var old;
var Role;
(function (Role) {
    Role[Role["SuperAdmin"] = 0] = "SuperAdmin";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Subscriber"] = 2] = "Subscriber";
})(Role || (Role = {}));
var Users = [
    {
        "firstName": "Chirag",
        "middleName": "Kumar",
        "lastName": "Kumar",
        "email": "chigsofficial",
        "phoneNo": 9873868701,
        "role": Role[1],
        "address": "Agra"
    },
    {
        "firstName": "Mayank",
        "middleName": "Kumar",
        "lastName": "Kumar",
        "email": "chigsofficial",
        "phoneNo": 9873868701,
        "role": Role[2],
        "address": "Agra"
    },
    {
        "firstName": "Dinesh",
        "middleName": "Kumar",
        "lastName": "Kumar",
        "email": "chigsofficial",
        "phoneNo": 9873868701,
        "role": Role[2],
        "address": "Agra"
    },
    {
        "firstName": "Saksham",
        "middleName": "Kumar",
        "lastName": "Kumar",
        "email": "chigsofficial",
        "phoneNo": 9873868701,
        "role": Role[2],
        "address": "Agra"
    },
    {
        "firstName": "Neelesh",
        "middleName": "Kumar",
        "lastName": "Kumar",
        "email": "chigsofficial",
        "phoneNo": 9873868701,
        "role": Role[2],
        "address": "Agra"
    }
];
//  :::: Decorator Factory ::::
function FormatDate(constructorFn) {
    var dtm = document.getElementById("datetime");
    setInterval(function () {
        dtm.innerHTML = new Date().toLocaleString();
    }, 1000);
}
var Table = /** @class */ (function () {
    function Table() {
    }
    Table.prototype.Create = function () {
        var addR = document.getElementById("my-table");
        console.log(addR);
        var newR = addR.insertRow();
        var i = addNum;
        var row = "<tr id=\"row_" + i + "\">\n        <td><input disabled type=text class=\"equal" + i + " firstname\"></td>\n        <td><input disabled type=text class=\"equal" + i + " middleName\"></td>\n        <td><input disabled type=text class=\"equal" + i + " lastName\"></td>\n        <td><input disabled type=text class=\"equal" + i + " email\"></td>\n        <td><input disabled type=text class=\"equal" + i + " phoneNo\"></td>\n        <td><input disabled type=text class=\"equal" + i + " role\"></td>\n        <td><input disabled type=text class=\"equal" + i + " address\"></td>\n        <td>\n        <button type=\"button\" onclick=\"new Table().Update(" + i + ",this)\"  value=\"Edit\">Edit</button>\n        <button type=\"button\" onclick=\"new Table().Delete(this)," + i + "\" value=\"Delete\">Delete</button>\n        </td>\n        <td id=\"hidden\" style=\"display:none\"><button type=\"button\" onclick=\"new Table().Save(this," + i + ")\" value=\"Save\">Save</button>\n        <button type=\"button\" onclick=\"new Table().Cancel(" + i + ")\" value=\"Cancel\">Cancel</button>\n        </td>\n        </tr>";
        addNum = addNum + 1;
        addR.innerHTML += row;
    };
    Table.prototype.Read = function () {
        var col = [];
        for (var i = 0; i < Users.length; i++) {
            for (var key in Users[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        col.push("buttons");
        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.id = "my-table";
        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
        var tr = table.insertRow(-1); // TABLE ROW.
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th"); // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
        for (var i_1 = 0; i_1 < Users.length; i_1++) {
            var row = "<tr id=\"row_" + i_1 + "\">\n                        <td><input disabled type=text class=\"equal" + i_1 + " firstname\" value=" + Users[i_1].firstName + "></td>\n                        <td><input disabled type=text class=\"equal" + i_1 + " middleName\" value=" + Users[i_1].middleName + "></td>\n                        <td><input disabled type=text class=\"equal" + i_1 + " lastName\" value=" + Users[i_1].lastName + "></td>\n                        <td><input disabled type=text class=\"equal" + i_1 + " email\" value=" + Users[i_1].email + "></td>\n                        <td><input disabled type=text class=\"equal" + i_1 + " phoneNo\" value=" + Users[i_1].phoneNo + "></td>\n                        <td><input disabled type=text class=\"equal" + i_1 + " role\" value=" + Users[i_1].role + "></td>\n                        <td><input disabled type=text class=\"equal" + i_1 + " address\" value=" + Users[i_1].address + "></td>\n                        <td>\n                        <button type=\"button\" onclick=\"new Table().Update(" + i_1 + ",this)\"  value=\"Edit\">Edit</button>\n                        <button type=\"button\" onclick=\"new Table().Delete(this)," + i_1 + "\" value=\"Delete\">Delete</button>\n                        \n                        </td>\n                        <td id=\"hidden\" style=\"display:none\"><button type=\"button\" onclick=\"new Table().Save(this," + i_1 + ")\" value=\"Save\">Save</button>\n                        <button type=\"button\" onclick=\"new Table().Cancel(" + i_1 + ")\" value=\"Cancel\">Cancel</button>\n                        </td>\n            \n            </tr>";
            table.innerHTML += row;
        }
        //document.getElementById("load-button").value="Refresh";
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("page");
        //console.log(divContainer);
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        var temp = document.getElementById("load");
        temp.innerText = "Refresh data";
    };
    Table.prototype.Update = function (i, td) {
        var row = document.querySelector("#row_" + i);
        //console.log(row)
        old = row.cloneNode(true);
        console.log("old", old);
        var i_s = document.querySelector("#row_" + i + " #hidden");
        i_s.style.display = 'inline';
        var ele = row.querySelectorAll('input'); //.disabled;
        //console.log("ele",typeof ele);
        for (var i_2 = 0; i_2 < ele.length; i_2++) {
            ele[i_2].disabled = false;
        }
    };
    Table.prototype.Delete = function (td) {
        if (confirm('Are you sure to delete this record ?')) {
            var row = td.parentElement.parentElement.rowIndex;
            console.log(row);
            var temp = document.getElementById("my-table");
            temp.deleteRow(row);
        }
    };
    Table.prototype.Save = function (td, id) {
        var selectedRow = document.getElementById("row_" + id);
        //console.log(selectedRow)
        //console.log("save",selectedRow.querySelectorAll("input")[0].value);
        var button = selectedRow.querySelectorAll('input');
        //console.log(button);
        for (var i = 0; i < button.length; i++) {
            button[i].disabled = true;
        }
        document.querySelector("#row_" + id + " #hidden").style.display = 'none';
    };
    Table.prototype.Cancel = function (id) {
        var row = document.querySelector("#row_" + id);
        console.log(row);
        console.log("OldNode", old);
        row.replaceWith(old);
    };
    Table = __decorate([
        FormatDate
    ], Table);
    return Table;
}());
function main() {
    var obj = new Table();
    obj.Read();
    document.getElementById("addData").style.display = "Block";
}

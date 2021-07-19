"use-strict"
var addNum:number=5;
var old:any;
enum Role{'SuperAdmin', 'Admin', 'Subscriber'}

interface model{
    firstName:String,
    middleName:String,
    lastName:String,
    email:String,
    phoneNo:Number,
    role:string,
    address:String | number
}

interface Icrud<T>{
    Create<T>():void;
    Read<T>():void;
    Update<T>(i:any,td:any):void;
    Delete<T>(i:any):void;
}


const Users:model[]=[
    {
        "firstName":"Chirag",
        "middleName":"Kumar",
        "lastName":"Kumar",
        "email":"chigsofficial",
        "phoneNo":9873868701,
        "role":Role[1],
        "address":"Agra"
    },
    {
        "firstName":"Mayank",
        "middleName":"Kumar",
        "lastName":"Kumar",
        "email":"chigsofficial",
        "phoneNo":9873868701,
        "role":Role[2],
        "address":"Agra"
    },
    {
        "firstName":"Dinesh",
        "middleName":"Kumar",
        "lastName":"Kumar",
        "email":"chigsofficial",
        "phoneNo":9873868701,
        "role":Role[2],
        "address":"Agra"
    },
    {
        "firstName":"Saksham",
        "middleName":"Kumar",
        "lastName":"Kumar",
        "email":"chigsofficial",
        "phoneNo":9873868701,
        "role":Role[2],
        "address":"Agra"
    },
    {
        "firstName":"Neelesh",
        "middleName":"Kumar",
        "lastName":"Kumar",
        "email":"chigsofficial",
        "phoneNo":9873868701,
        "role":Role[2],
        "address":"Agra"
    }
]

//  :::: Decorator Factory ::::

function FormatDate(constructorFn:Function){
    const dtm=document.getElementById("datetime") as HTMLInputElement;
    setInterval(function() {
       dtm.innerHTML=new Date().toLocaleString();
   }, 1000);

}


@FormatDate
class Table implements Icrud<void>{
    Create<T>(){
        var addR:any=document.getElementById("my-table") as HTMLElement;
        console.log(addR);
         var newR=addR.insertRow();
        let i:number=addNum;
        let row=`<tr id="row_${i}">
        <td><input disabled type=text class="equal${i} firstname"></td>
        <td><input disabled type=text class="equal${i} middleName"></td>
        <td><input disabled type=text class="equal${i} lastName"></td>
        <td><input disabled type=text class="equal${i} email"></td>
        <td><input disabled type=text class="equal${i} phoneNo"></td>
        <td><input disabled type=text class="equal${i} role"></td>
        <td><input disabled type=text class="equal${i} address"></td>
        <td>
        <button type="button" onclick="new Table().Update(${i},this)"  value="Edit">Edit</button>
        <button type="button" onclick="new Table().Delete(this),${i}" value="Delete">Delete</button>
        </td>
        <td id="hidden" style="display:none"><button type="button" onclick="new Table().Save(this,${i})" value="Save">Save</button>
        <button type="button" onclick="new Table().Cancel(${i})" value="Cancel">Cancel</button>
        </td>
        </tr>`
        addNum=addNum+1;
        addR.innerHTML += row;

    }
    Read<T>(){
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
        var table = document.createElement("table") as HTMLTableElement;

        table.id="my-table";

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        for(let i=0;i<Users.length;i++){
            let row=`<tr id="row_${i}">
                        <td><input disabled type=text class="equal${i} firstname" value=${Users[i].firstName}></td>
                        <td><input disabled type=text class="equal${i} middleName" value=${Users[i].middleName}></td>
                        <td><input disabled type=text class="equal${i} lastName" value=${Users[i].lastName}></td>
                        <td><input disabled type=text class="equal${i} email" value=${Users[i].email}></td>
                        <td><input disabled type=text class="equal${i} phoneNo" value=${Users[i].phoneNo}></td>
                        <td><input disabled type=text class="equal${i} role" value=${Users[i].role}></td>
                        <td><input disabled type=text class="equal${i} address" value=${Users[i].address}></td>
                        <td>
                        <button type="button" onclick="new Table().Update(${i},this)"  value="Edit">Edit</button>
                        <button type="button" onclick="new Table().Delete(this),${i}" value="Delete">Delete</button>
                        
                        </td>
                        <td id="hidden" style="display:none"><button type="button" onclick="new Table().Save(this,${i})" value="Save">Save</button>
                        <button type="button" onclick="new Table().Cancel(${i})" value="Cancel">Cancel</button>
                        </td>
            
            </tr>`
            table.innerHTML += row;
        }
        //document.getElementById("load-button").value="Refresh";
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("page") as HTMLElement;
        //console.log(divContainer);
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        let temp=document.getElementById("load") as HTMLElement;
        temp.innerText="Refresh data";
    }

    
    
    Update(i:any,td:any):void{
        var row = document.querySelector(`#row_${i}`) as HTMLInputElement;
        //console.log(row)
        old=row.cloneNode(true);
        console.log("old",old);
        var i_s=document.querySelector(`#row_${i} #hidden`) as HTMLElement;
        i_s.style.display='inline';
        var ele = row.querySelectorAll('input')//.disabled;
        //console.log("ele",typeof ele);
        for(let i=0;i<ele.length;i++){
            ele[i].disabled=false;
        }
    }
    Delete<T>(td:any):void{
        if (confirm('Are you sure to delete this record ?')) {
            let row = td.parentElement.parentElement.rowIndex;
            console.log(row);
            let temp=document.getElementById("my-table") as HTMLTableElement
            temp.deleteRow(row);
        }
    }
    Save<T>(td:any,id:any):void{
    var selectedRow=document.getElementById(`row_${id}`) as HTMLElement;
    //console.log(selectedRow)
    //console.log("save",selectedRow.querySelectorAll("input")[0].value);
    var button=selectedRow.querySelectorAll('input');
    //console.log(button);
    for(let i=0;i<button.length;i++){
        button[i].disabled=true;
    }
    document.querySelector<any>(`#row_${id} #hidden`).style.display='none';
    }

    Cancel<T>(id:any):void{
        let row=document.querySelector(`#row_${id}`) as HTMLElement;
        console.log(row);
        console.log("OldNode",old);
        row.replaceWith(old);
    }
}

function main(){
    const obj=new Table();
    obj.Read();
    (document.getElementById("addData") as HTMLElement).style.display="Block";
}



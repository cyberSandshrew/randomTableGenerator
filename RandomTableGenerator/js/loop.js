//Jerry French
//csc350 week 4
//07/20/2022


let randomBK = ['darkgreen','navy','maroon','black'];//globally

function createTable(){
    let myTable=document.createElement('table');
    document.body.appendChild(myTable);
    document.body.style.backgroundColor=randomBK[Math.floor(Math.random()* randomBK.length)];
   
    
    myTable.id="tbl";


    for (let i=2;i<=100;i++){
        let currentRow=myTable.insertRow(-1);//sets up insert for the row
        let firstCell=currentRow.insertCell(0);

        i = i*Math.floor(Math.random()*3 + 1); //set i to a random number(2* 1to4)
        firstCell.innerHTML=i.toString();

        let secondCell=currentRow.insertCell(1);
        secondCell.innerHTML=(i*i).toString();

        let thirdCell=currentRow.insertCell(2);
        thirdCell.innerHTML=(i*i*i).toString();

        var a = document.getElementById("tbl");
        var rows = a.rows.length;
        let cells = rows*3;

        document.getElementById("label").innerHTML = "Number of Values Generated " + cells;

    }
}

function regenerate(){
    let myTable=document.getElementsByTagName("table");
    document.body.removeChild(myTable[0]);//removes the table
    createTable();
}
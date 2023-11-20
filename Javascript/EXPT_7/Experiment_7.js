const Arr = new Array();
        function AddElement() {
            let Element = document.getElementById("arrEle").value;
            let len = document.getElementById("arrlen").value;
            if(Arr.length >= len) {
                alert("You are trying to Add more elements than the Array Length!")
            } else {
                Arr.push(Element);
                document.getElementById("ArrOut").innerHTML = JSON.stringify(Arr);
            }
        }

        function AddObj() {
            var obj = new Object();
            let key = document.getElementById("ObjKey").value;
            let val = document.getElementById("ObjVal").value;
            let len = document.getElementById("arrlen").value;
            obj.key = key;
            obj.val = val;
            if(Arr.length >= len) {
                alert("You are trying to Add more elements than the Array Length!");
            } else {
                Arr.push(obj);
                document.getElementById("ArrOut").innerHTML = JSON.stringify(Arr);
            }
        }

        function checkArray() {
            var table;
            table='<center><table id="tablestyle" style="text-align: center"><tr><td>Sr. No.</td><td>Element</td><td>Type Of Element</td><td>Is Array?</td></tr>';
            for(i = 0;i < Arr.length; i++){
                table += '<tr><td>'+(i+1)+'</td><td>'+JSON.stringify(Arr[i])+'</td><td>'+typeof(Arr[i])+'</td><td>'+Array.isArray(Arr[i])+'</td></tr>';
            }
            table += '</table></center>';
            document.getElementById("TableOutput").innerHTML = table;
        }
window.onload = function () {

    var todoList = [];

    document.getElementById('add').onclick = function(){
        var d =document.getElementById('in').value;
        var temp = {};
        temp.todo = d;
        temp.check = false;
        var i = todoList.length;
        todoList[i] = temp;
        consol.log(todoList);
    }

    function out() {
        var out ='';
        for (var key in todoList){
            out += todoList[key].todo + '<br>';
        }
        document.getElementById('out').innerHTML = out;
    }
}
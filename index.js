var myListItems = document.getElementsByTagName("LI");
var i;
for(i = 0; i < myListItems.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode('\u00D7');
    span.appendChild(txt);
    span.className = "cross";
    myListItems[i].append(span);
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
})

list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'SPAN'){
        //ev.target.classList.toggle('checked');
        //list.removeChild();
        ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
    }
})


var addlist = document.querySelector(".addBtn");
addlist.addEventListener('click',function(){
    var newItem = document.querySelector(".addTask").value;

    if(newItem === ""){
        alert("You must write something!");
    }
    else{
        function addItemToList(item) {
            var li = document.createElement('li');
            li.textContent = item;
            return li;
        }
        var menu = document.querySelector('ul');
        menu.appendChild(addItemToList(newItem));

        document.querySelector(".addTask").value = "";

        var myListItems = document.getElementsByTagName("LI");
        var i=myListItems.length-1;
        var span = document.createElement("SPAN");
        var txt = document.createTextNode('\u00D7');
        span.appendChild(txt);
        span.className = "cross";
        myListItems[i].append(span);
    }
});


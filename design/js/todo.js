var list = document.querySelectorAll("li");
var dlt = document.querySelectorAll("span");
var newtodo = document.querySelector("#newTodo");
var addTodo = document.querySelector("ul");

// for(var i =0; i < list.length; i++)
// {
//     list[i].addEventListener("click",function(e){
//         this.classList.toggle("completed");
//     },true);
//     dlt[i].addEventListener("click",function(event){
//         $(this).parent().fadeOut(600, function(){
//             $(this).remove();
//         })
//         event.stopPropagation();
//     });
// }

newtodo.addEventListener("keypress", function(event)
{
    if(event.keyCode === 13) 
    {
        var icon = document.createElement("i");
        icon.classList.add("fas","fa-trash-alt");
        var newSpan = document.createElement("span");
        newSpan.classList.add("dlt");
        newSpan.appendChild(icon);

        newSpan.addEventListener("click",function(){
            this.parentElement.classList.toggle("delete");
            var par = this.parentElement;

            setTimeout(dlt, 400);
            function dlt(){
                console.log(this);
                par.remove();    
            }
        });

        var valueSpan = document.createElement("span");
        valueSpan.textContent = this.value;

        valueSpan.addEventListener("click",function(){
            this.parentElement.classList.toggle("completed");
        });

        var newList = document.createElement("li");
        newList.appendChild(newSpan);
        newList.appendChild(valueSpan);
        addTodo.appendChild(newList);

        newtodo.value = "";
        
    }
});

$(".fa-plus-circle").click(function(){
    $("#newTodo").fadeToggle();
});
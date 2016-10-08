console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New Value";
var img = document.getElementById("img");
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};


var button = document.getElementById('counter');
var counter;
counter.onclick(function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange() = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.state === 200){
                counter = counter + 1;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString(); 
            }
        }
    };
    request.open('GET','http://msinphilpk.imad.hasura-app.io/counter',true);
    request.send(null);
});

// we can use axios for call an api 
axios.get('http://www.example.com/api/get/1')
        .then(res => { console.log(res)})
        .catch(err => {console.log(err)}
        )

// by using fecth 
fetch('http://www.example.com/api/get/1')
.then(response => response.json())
.then(data => console.log(data));


/// we can fetch from xmlhttp
var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
        //document.getElementById("demo").innerHTML = myObj.high;
    }
};

xmlhttp.open("GET", "http://www.example.com/api/get/1", true);
xmlhttp.send();
var myInfo = {myName:"Riajul Islam", villageName: "Char Bodorpasa", parentName: "Abul khair akon"}
// console.log(myInfo);
// console.log(myInfo.parentName);
var newPro = myInfo["myName"];
// console.log(newPro);

function Info(name,age,address,number){
    this.name = name;
    this.age = age;
    this.address = address;
    this.number = number;
    this.ShowMe = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.address);
        console.log(this.number);
    };
};
var infoAll = new Info("Riajul Islam", 23, "Italy", 3512945160);
// console.log(infoAll);
infoAll.ShowMe();
// var, let, const ---> degisken tanımlarken 
// var ı pure javascriptte kullanılıyor
// ecmascript ile let i kullanıyoruz. 
//

let sayi1 = 10;
sayi1 = "Engin Demiroğ";
let student = {id:1, name:"Engin"};
//console.log(student);

function save(ogrenci, puan=10) {
    console.log(ogrenci.name + " : " + puan);
}
//save(student,100);
//save(student);

function save2(puan=10, ogrenci) {
    console.log(ogrenci.name + " : " + puan);
}
//save2(undefined,student);

let students = ["Engin Demiroğ","Halit Kalaycı","Engin Toprak","Büşra"]
//console.log(students);

let students2 = [students, {id:2, name:"Halit"},"Ankara",{city:"İstanbul"}]
//console.log(students2)

//rest (geriye kalanlar-parametreler)
//params (C#)
//varArgs (Java)
let showProducts = function (id,...products){
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts) //function tipinde
//showProducts(10,["Elma","Armut","Karpuz"])

//spread- ayrıştırmak
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
//console.log(Math.max(1,2,3,4,50,4,60,14)) //60
console.log(Math.max(...points))
// spread bir arrayin elemanlarını parametreler olarak ayırıyor. --> ...points
console.log(..."ABC","D",..."EFG","H") //A B C D E F G H

//Destructuring- bir arrayin degerlerini degiskenlere atar
let populations = [10000,20000,30000,[40000,50000]]
//let populations = [10000,20000,30000,...[40000,50000]]
//let [small, medium, high, veryHigh, maximum] = populations
let [small, medium, high, [veryHigh, maximum]] = populations
/*
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)
*/
function someFunction([x1], number) {
    console.log(x1)
}
//someFunction(populations)

//objeyi destruct etmek için
let category = {id:1, name:"İçecek"}
//console.log(category.id)
//console.log(category["name"]) // üsttekiyle aynı sonuc bu farklı bir kullanım
let {id,name} = category
console.log(id)
console.log(name)



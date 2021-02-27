"use strict";

let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

let div = document.getElementById("cookiesdetals");
let table = document.createElement("table");
div.appendChild(table);

let shops = [];

function SalmonCookies(country, maxValue, minValue, avgValue) {
  this.max = maxValue;
  this.min = minValue;
  this.avg = avgValue;
  this.country = country;
  this.sum = 0;
  
  this.cusPerhour = [];
  this.cookperHour = [];
  shops.push(this);
  console.log(this);
}

SalmonCookies.prototype.customerperHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
    this.cusPerhour.push(random);
  }
};

SalmonCookies.prototype.cookiesPerhour = function () { 
  for (let i = 0; i < hours.length; i++) {
    let cookies = this.avg * this.cusPerhour[i];
    this.cookperHour.push(Math.ceil(cookies));
  }
};

SalmonCookies.prototype.summation = function () {
  for (let i = 0; i < this.cookperHour.length; i++) {
    this.sum = this.sum + this.cookperHour[i];
  }
  return this.sum;
};

SalmonCookies.prototype.render = function () {
  let tr1 = document.createElement("tr");
  table.appendChild(tr1);
  tr1.textContent = this.country;

  let td;
  for (let i = 0; i < this.cookperHour.length; i++) {
    td = document.createElement("td");
    tr1.appendChild(td);
    td.textContent = this.cookperHour[i];
  }

  let tdsum = document.createElement("td");
  tr1.appendChild(tdsum);
  tdsum.textContent = this.sum;
};



let form = document.getElementById('cookiesform');

form.addEventListener('submit', newlocatoincrearting)


function newlocatoincrearting (event) {

  event.preventDefault();
  console.log(event);

  let locationName = event.target.lacationname.value;

    let max = event.target.maximumValue.value;
     max = parseInt(max);
     console.log(max)

     let min = event.target.minimumValue.value;
     min = parseInt(min);

     let Avg = event.target.averageValue.value;
     Avg = parseFloat(Avg);


table.textContent ="";

let tr = document.createElement("tr");
table.appendChild(tr);
let th = document.createElement("th");
tr.appendChild(th);

for (let i = 0; i < hours.length; i++) {
  let th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = hours[i];
}

let total = document.createElement("th");
tr.appendChild(total);
total.textContent = "Daily Location Total ";


let seattle = new SalmonCookies("seattle", 23, 65	, 6.3);
seattle.customerperHour();
seattle.cookiesPerhour();
seattle.summation();
seattle.render();

let Dubai = new SalmonCookies("Dubai", 11 , 38 , 3.7 );
Dubai.customerperHour();
Dubai.cookiesPerhour();
Dubai.summation();
Dubai.render();

let Tokyo = new SalmonCookies("Tokyo", 3 , 24 , 1.2 );
Tokyo.customerperHour();
Tokyo.cookiesPerhour();
Tokyo.summation();
Tokyo.render();

let Paris = new SalmonCookies("Paris", 20	, 38, 2.3 );
Paris.customerperHour();
Paris.cookiesPerhour();
Paris.summation();
Paris.render();

let Lima = new SalmonCookies("Lima", 2 , 16 , 	4.6 );
Lima.customerperHour();
Lima.cookiesPerhour();
Lima.summation();
Lima.render();

let newArea = new SalmonCookies(locationName, max , min , 	Avg );
newArea.customerperHour();
newArea.cookiesPerhour();
newArea.summation();
newArea.render();



let arrofobjects=[seattle,Tokyo,Dubai,Paris,Lima];
arrofobjects.push(newArea) ; 

totalito();

function totalito () {
let trTotal = document.createElement("tr");
table.appendChild(trTotal);
trTotal.textContent = "Total";


let grandSum = 0 ;
let summationPerour ;
let td ;
for (let i=0 ; i<hours.length ; i++){
  summationPerour = 0 
  for (let j =0 ; j< arrofobjects.length ; j++){
  summationPerour = summationPerour + arrofobjects[j].cookperHour[i]

  }

  td = document.createElement('td');
  trTotal.appendChild(td);
  td.textContent = summationPerour

   grandSum += summationPerour
}

td = document.createElement('td') ;
trTotal.appendChild(td);
td.textContent=grandSum

}
}









// totalito();

// function totalito () {
// let trTotal = document.createElement("tr");
// table.appendChild(trTotal);
// trTotal.textContent = "Total";


// let grandSum = 0 ;
// let summationPerour ;
// let td ;
// for (let i=0 ; i<hours.length ; i++){
//   summationPerour = 0
//   // grandSum = 0 
//   for (let j =0 ; j< arrofobjects.length ; j++){
//     summationPerour = summationPerour + arrofobjects[j].cookperHour[i]

//   }

//   td = document.createElement('td');
//   trTotal.appendChild(td);
//   td.textContent = summationPerour

//    grandSum += summationPerour
// }

// td = document.createElement('td') ;
// trTotal.appendChild(td);
// td.textContent=grandSum

// }























// let seattle = {

// max : 23,
// min : 65,
// avg : 6.3 ,
// sum : 0 ,
// name : 'seattle' ,

// cusPerhour : [] ,
// cookperHour : [] ,

//  customerperHour : function() {
//      for (let i=0 ; i<hours.length ; i++ ){

//         let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
//         this.cusPerhour.push(random) ;

//      }
//     },

//      cookiesPerhour : function () {
//         for (let i=0 ; i<hours.length ; i++ ){
//           let cookies = this.avg * this.cusPerhour[i]
//           this.cookperHour.push(Math.ceil(cookies)) ;
//      }

//  },

//  summation : function () {
//     for ( let i=0 ; i<this.cookperHour.length ;i++){
//         this.sum = this.sum + this.cookperHour[i] ;
//     }
//     return  this.sum ;
//     },

// render : function () {

// let divEl=document.getElementById('cookiesdetals');
// let headerEl=document.createElement('h1')
// divEl.appendChild(headerEl);
// headerEl.textContent = this.name ;
// let unorderedlistEL=document.createElement('ul');
// divEl.appendChild(unorderedlistEL);
// let span = document.createElement('span');
// divEl.appendChild(span);
// span.textContent = "total"+':' + seattle.summation() ;

// for ( let i=0 ; i<this.cookperHour.length ;i++){

//     let listEl=document.createElement('li');

//     unorderedlistEL.appendChild(listEl);
//     listEl.textContent=hours[i]+" : "+ this.cookperHour[i]+" cookies";

// }

// }

// }
// seattle.customerperHour()
// // console.log(seattle)
// seattle.cookiesPerhour()
// seattle.render()
// // seattle.cookperHour()
// console.log(seattle)

// let Tokyo = {

//     max : 24,
//     min : 3,
//     avg : 1.2 ,
//     sum : 0 ,
//     name : 'Tokyo' ,

//     cusPerhour : [] ,
//     cookperHour : [] ,

//      customerperHour : function() {
//          for (let i=0 ; i<hours.length ; i++ ){

//             let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             this.cusPerhour.push(random) ;

//          }
//         },

//          cookiesPerhour : function () {
//             for (let i=0 ; i<hours.length ; i++ ){
//               let cookies = this.avg * this.cusPerhour[i]
//               this.cookperHour.push(Math.ceil(cookies)) ;
//          }

//      },

//      summation : function () {
//         for ( let i=0 ; i<this.cookperHour.length ;i++){

//             return this.sum=this.sum + this.cookperHour[i] ;
//         }
//         },

//     render : function () {

//     let divEl=document.getElementById('cookiesdetals');
//     let headerEl=document.createElement('h1')
//     divEl.appendChild(headerEl);
//     headerEl.textContent = this.name ;
//     let unorderedlistEL=document.createElement('ul');
//     divEl.appendChild(unorderedlistEL);
//     let span = document.createElement('span');
//     divEl.appendChild(span);
//     span.textContent = "total"+':' + Tokyo.summation() ;

//     for ( let i=0 ; i<this.cookperHour.length ;i++){

//         let listEl=document.createElement('li');

//         unorderedlistEL.appendChild(listEl);
//         listEl.textContent=hours[i]+" : "+ this.cookperHour[i]+" cookies";

//     }

//     }

//     }
//     Tokyo.customerperHour()
//     // console.log(seattle)
//     Tokyo.cookiesPerhour()
//     Tokyo.render()
//     // seattle.cookperHour()
//     console.log(Tokyo)

//     let Dubai = {

//         max : 38,
//         min : 11,
//         avg : 3.7 ,
//         sum : 0 ,
//         name : 'Dubai' ,

//         cusPerhour : [] ,
//         cookperHour : [] ,

//          customerperHour : function() {
//              for (let i=0 ; i<hours.length ; i++ ){

//                 let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
//                 this.cusPerhour.push(random) ;

//              }
//             },

//              cookiesPerhour : function () {
//                 for (let i=0 ; i<hours.length ; i++ ){
//                   let cookies = this.avg * this.cusPerhour[i]
//                   this.cookperHour.push(Math.ceil(cookies)) ;
//              }

//          },

//          summation : function () {
//             for ( let i=0 ; i<this.cookperHour.length ;i++){

//                 return this.sum=this.sum + this.cookperHour[i] ;
//             }
//             },

//         render : function () {

//         let divEl=document.getElementById('cookiesdetals');
//         let headerEl=document.createElement('h1')
//         divEl.appendChild(headerEl);
//         headerEl.textContent = this.name ;
//         let unorderedlistEL=document.createElement('ul');
//         divEl.appendChild(unorderedlistEL);
//         let span = document.createElement('span');
//         divEl.appendChild(span);
//         span.textContent = "total"+':' + Dubai.summation() ;

//         for ( let i=0 ; i<this.cookperHour.length ;i++){

//             let listEl=document.createElement('li');

//             unorderedlistEL.appendChild(listEl);
//             listEl.textContent=hours[i]+" : "+ this.cookperHour[i]+" cookies";

//         }

//         }

//         }
//         Dubai.customerperHour()
//         // console.log(seattle)
//         Dubai.cookiesPerhour()
//         Dubai.render()
//         // seattle.cookperHour()
//         console.log(Dubai)

//         let Paris = {

//             max : 38,
//             min : 20,
//             avg : 2.3 ,
//             sum : 0 ,
//             name : 'Paris' ,

//             cusPerhour : [] ,
//             cookperHour : [] ,

//              customerperHour : function() {
//                  for (let i=0 ; i<hours.length ; i++ ){

//                     let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
//                     this.cusPerhour.push(random) ;

//                  }
//                 },

//                  cookiesPerhour : function () {
//                     for (let i=0 ; i<hours.length ; i++ ){
//                       let cookies = this.avg * this.cusPerhour[i]
//                       this.cookperHour.push(Math.ceil(cookies)) ;
//                  }

//              },

//              summation : function () {
//                 for ( let i=0 ; i<this.cookperHour.length ;i++){

//                     return this.sum=this.sum + this.cookperHour[i] ;
//                 }
//                 },

//             render : function () {

//             let divEl=document.getElementById('cookiesdetals');
//             let headerEl=document.createElement('h1')
//             divEl.appendChild(headerEl);
//             headerEl.textContent = this.name ;
//             let unorderedlistEL=document.createElement('ul');
//             divEl.appendChild(unorderedlistEL);
//             let span = document.createElement('span');
//             divEl.appendChild(span);
//             span.textContent = "total"+':' + Paris.summation() ;

//             for ( let i=0 ; i<this.cookperHour.length ;i++){

//                 let listEl=document.createElement('li');

//                 unorderedlistEL.appendChild(listEl);
//                 listEl.textContent=hours[i]+" : "+ this.cookperHour[i]+" cookies";

//             }

//             }

//             }
//             Paris.customerperHour()
//             // console.log(seattle)
//             Paris.cookiesPerhour()
//             Paris.render()
//             // seattle.cookperHour()
//             console.log(Paris)

//             let Lima = {

//                 max : 16,
//                 min : 2,
//                 avg : 	4.6 ,
//                 sum : 0 ,
//                 name : 'Lima' ,

//                 cusPerhour : [] ,
//                 cookperHour : [] ,

//                  customerperHour : function() {
//                      for (let i=0 ; i<hours.length ; i++ ){

//                         let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
//                         this.cusPerhour.push(random) ;

//                      }
//                     },

//                      cookiesPerhour : function () {
//                         for (let i=0 ; i<hours.length ; i++ ){
//                           let cookies = this.avg * this.cusPerhour[i]
//                           this.cookperHour.push(Math.ceil(cookies)) ;
//                      }

//                  },

//                  summation : function () {
//                     for ( let i=0 ; i<this.cookperHour.length ;i++){

//                         return this.sum=this.sum + this.cookperHour[i] ;
//                     }
//                     },

//                 render : function () {

//                 let divEl=document.getElementById('cookiesdetals');
//                 let headerEl=document.createElement('h1')
//                 divEl.appendChild(headerEl);
//                 headerEl.textContent = this.name ;
//                 let unorderedlistEL=document.createElement('ul');
//                 divEl.appendChild(unorderedlistEL);
//                 let span = document.createElement('span');
//                 divEl.appendChild(span);
//                 span.textContent = "total"+':' + Lima.summation() ;

//                 for ( let i=0 ; i<this.cookperHour.length ;i++){

//                     let listEl=document.createElement('li');

//                     unorderedlistEL.appendChild(listEl);
//                     listEl.textContent=hours[i]+" : "+ this.cookperHour[i]+" cookies";

//                 }

//                 }

//                 }
//                 Lima.customerperHour()
//                 // console.log(seattle)
//                 Lima.cookiesPerhour()
//                 Lima.render()
//                 // seattle.cookperHour()
//                 console.log(Lima)

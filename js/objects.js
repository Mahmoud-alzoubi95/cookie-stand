'use strict';

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattle = {

max : 23,
min : 65,
avg : 6.3 ,
sum : 0 ,
name : 'seattle' ,

cusPerhour : [] ,
cookperHour : [] ,
 
 customerperHour : function() {
     for (let i=0 ; i<hours.length ; i++ ){

        let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.cusPerhour.push(random) ;
        
     }
    },

     cookiesPerhour : function () {
        for (let i=0 ; i<hours.length ; i++ ){
          let cookies = this.avg * this.cusPerhour[i]
          this.cookperHour.push(Math.ceil(cookies)) ;
     }

 },


 summation : function () {
    for ( let i=0 ; i<this.cookperHour.length ;i++){
        this.sum = this.sum + this.cookperHour[i] ;  
    } 
    return  this.sum ;
    },

render : function () {


let divEl=document.getElementById('cookiesdetals');
let headerEl=document.createElement('h1')
divEl.appendChild(headerEl);
headerEl.textContent = this.name ;
let unorderedlistEL=document.createElement('ul');
divEl.appendChild(unorderedlistEL);
let span = document.createElement('span');
divEl.appendChild(span);
span.textContent = "total"+':' + seattle.summation() ;


for ( let i=0 ; i<this.cookperHour.length ;i++){

    let listEl=document.createElement('li');
    
    unorderedlistEL.appendChild(listEl);
    listEl.textContent=hours[i]+" : "+ this.cookperHour[i]+" cookies";
   
   
}

}

}
seattle.customerperHour()
// console.log(seattle)
seattle.cookiesPerhour()
seattle.render()
// seattle.cookperHour()
console.log(seattle)






let Tokyo = {

    max : 24,
    min : 3,
    avg : 1.2 ,
    sum : 0 ,
    name : 'Tokyo' ,
    
    cusPerhour : [] ,
    cookperHour : [] ,
     
     customerperHour : function() {
         for (let i=0 ; i<hours.length ; i++ ){
    
            let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
            this.cusPerhour.push(random) ;
            
         }
        },
    
         cookiesPerhour : function () {
            for (let i=0 ; i<hours.length ; i++ ){
              let cookies = this.avg * this.cusPerhour[i]
              this.cookperHour.push(Math.ceil(cookies)) ;
         }
    
     },
    
    
     summation : function () {
        for ( let i=0 ; i<this.cookperHour.length ;i++){
           
            return this.sum=this.sum + this.cookperHour[i] ; 
        } 
        },
    
    render : function () {
    
    
    let divEl=document.getElementById('cookiesdetals');
    let headerEl=document.createElement('h1')
    divEl.appendChild(headerEl);
    headerEl.textContent = this.name ;
    let unorderedlistEL=document.createElement('ul');
    divEl.appendChild(unorderedlistEL);
    let span = document.createElement('span');
    divEl.appendChild(span);
    span.textContent = "total"+':' + Tokyo.summation() ;
    
    
    for ( let i=0 ; i<this.cookperHour.length ;i++){
    
        let listEl=document.createElement('li');
        
        unorderedlistEL.appendChild(listEl);
        listEl.textContent=hours[i]+" : "+ this.cookperHour[i]+" cookies";
       
       
    }
    
    }
    
    }
    Tokyo.customerperHour()
    // console.log(seattle)
    Tokyo.cookiesPerhour()
    Tokyo.render()
    // seattle.cookperHour()
    console.log(Tokyo)







    let Dubai = {

        max : 38,
        min : 11,
        avg : 3.7 ,
        sum : 0 ,
        name : 'Dubai' ,
        
        cusPerhour : [] ,
        cookperHour : [] ,
         
         customerperHour : function() {
             for (let i=0 ; i<hours.length ; i++ ){
        
                let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.cusPerhour.push(random) ;
                
             }
            },
        
             cookiesPerhour : function () {
                for (let i=0 ; i<hours.length ; i++ ){
                  let cookies = this.avg * this.cusPerhour[i]
                  this.cookperHour.push(Math.ceil(cookies)) ;
             }
        
         },
        
        
         summation : function () {
            for ( let i=0 ; i<this.cookperHour.length ;i++){
               
                return this.sum=this.sum + this.cookperHour[i] ; 
            } 
            },
        
        render : function () {
        
        
        let divEl=document.getElementById('cookiesdetals');
        let headerEl=document.createElement('h1')
        divEl.appendChild(headerEl);
        headerEl.textContent = this.name ;
        let unorderedlistEL=document.createElement('ul');
        divEl.appendChild(unorderedlistEL);
        let span = document.createElement('span');
        divEl.appendChild(span);
        span.textContent = "total"+':' + Dubai.summation() ;
        
        
        for ( let i=0 ; i<this.cookperHour.length ;i++){
        
            let listEl=document.createElement('li');
            
            unorderedlistEL.appendChild(listEl);
            listEl.textContent=hours[i]+" : "+ this.cookperHour[i]+" cookies";
           
           
        }
        
        }
        
        }
        Dubai.customerperHour()
        // console.log(seattle)
        Dubai.cookiesPerhour()
        Dubai.render()
        // seattle.cookperHour()
        console.log(Dubai)







        let Paris = {

            max : 38,
            min : 20,
            avg : 2.3 ,
            sum : 0 ,
            name : 'Paris' ,
            
            cusPerhour : [] ,
            cookperHour : [] ,
             
             customerperHour : function() {
                 for (let i=0 ; i<hours.length ; i++ ){
            
                    let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
                    this.cusPerhour.push(random) ;
                    
                 }
                },
            
                 cookiesPerhour : function () {
                    for (let i=0 ; i<hours.length ; i++ ){
                      let cookies = this.avg * this.cusPerhour[i]
                      this.cookperHour.push(Math.ceil(cookies)) ;
                 }
            
             },
            
            
             summation : function () {
                for ( let i=0 ; i<this.cookperHour.length ;i++){
                   
                    return this.sum=this.sum + this.cookperHour[i] ; 
                } 
                },
            
            render : function () {
            
            
            let divEl=document.getElementById('cookiesdetals');
            let headerEl=document.createElement('h1')
            divEl.appendChild(headerEl);
            headerEl.textContent = this.name ;
            let unorderedlistEL=document.createElement('ul');
            divEl.appendChild(unorderedlistEL);
            let span = document.createElement('span');
            divEl.appendChild(span);
            span.textContent = "total"+':' + Paris.summation() ;
            
            
            for ( let i=0 ; i<this.cookperHour.length ;i++){
            
                let listEl=document.createElement('li');
                
                unorderedlistEL.appendChild(listEl);
                listEl.textContent=hours[i]+" : "+ this.cookperHour[i]+" cookies";
               
               
            }
            
            }
            
            }
            Paris.customerperHour()
            // console.log(seattle)
            Paris.cookiesPerhour()
            Paris.render()
            // seattle.cookperHour()
            console.log(Paris)
    





            let Lima = {

                max : 16,
                min : 2,
                avg : 	4.6 ,
                sum : 0 ,
                name : 'Lima' ,
                
                cusPerhour : [] ,
                cookperHour : [] ,
                 
                 customerperHour : function() {
                     for (let i=0 ; i<hours.length ; i++ ){
                
                        let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
                        this.cusPerhour.push(random) ;
                        
                     }
                    },
                
                     cookiesPerhour : function () {
                        for (let i=0 ; i<hours.length ; i++ ){
                          let cookies = this.avg * this.cusPerhour[i]
                          this.cookperHour.push(Math.ceil(cookies)) ;
                     }
                
                 },
                
                
                 summation : function () {
                    for ( let i=0 ; i<this.cookperHour.length ;i++){
                       
                        return this.sum=this.sum + this.cookperHour[i] ; 
                    } 
                    },
                
                render : function () {
                
                
                let divEl=document.getElementById('cookiesdetals');
                let headerEl=document.createElement('h1')
                divEl.appendChild(headerEl);
                headerEl.textContent = this.name ;
                let unorderedlistEL=document.createElement('ul');
                divEl.appendChild(unorderedlistEL);
                let span = document.createElement('span');
                divEl.appendChild(span);
                span.textContent = "total"+':' + Lima.summation() ;
                
                
                for ( let i=0 ; i<this.cookperHour.length ;i++){
                
                    let listEl=document.createElement('li');
                    
                    unorderedlistEL.appendChild(listEl);
                    listEl.textContent=hours[i]+" : "+ this.cookperHour[i]+" cookies";
                   
                   
                }
                
                }
                
                }
                Lima.customerperHour()
                // console.log(seattle)
                Lima.cookiesPerhour()
                Lima.render()
                // seattle.cookperHour()
                console.log(Lima)
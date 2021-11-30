import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    food: any = [
  
    {
      name: 'Apple',
      calories:52,
      baseUrl:"../assets/app.jpeg",
    },

    {
      name: 'Biriyani',
      calories: 241,
      baseUrl:"../assets/vegB.jpg",
    },


    {
      name: 'pizza',
      calories:266 ,
      baseUrl:"../assets/pizza.jpg",
    },
    {
      name: 'Idly',
      calories: 35,
      baseUrl:"../assets/idly.jpg",
    },
  ]
  todayFood:any=[];
  searchTerm:any;
  store:any;
  foodlist:any=this.food;
  showform:boolean=false;
  name:any;
  calorie:any;
  baseUrl:any;
  showtoday:boolean=false;
     transform()
     {
       this.foodlist=this.food;
       let searchdata:any=[];
       console.log("ddsd");
       if(this.searchTerm.length==0)
       {
         console.log("call1");
          this.foodlist=this.food;
       }
       else
       {
         for(let i=0;i<this.foodlist.length;i++)
         {
            let str=this.foodlist[i].name.substr(0,this.searchTerm.length);
            if(str.toLowerCase()==this.searchTerm.toLowerCase()){
                searchdata.push(this.foodlist[i]);
            }
            
         }
        this.store=this.foodlist;
        this.foodlist=searchdata;
       }
     }

     showForm()
     {
       if(this.showform)
       {
        this.showform=false;
       }
       else
       {
        this.showform=true;
       }
     }

     addFood() {
      let x: any =
      {
        name: this.name,
        calorie: this.calorie,
        baseUrl: this.baseUrl,
      }
      this.food.push(x);
      this.showform=false;
      this.name=null;
      this.calorie=null;
      this.baseUrl=null;
    }

    onFileSelected(event)
    {
      if (event.target.files) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event1: any) => {
          console.log(event1, "event1");
          this.baseUrl = event1.target.result;
          console.log('vals', this.baseUrl);
        }
      }
    }

    todayList(foodNam:any,cals:any,url){
     let x={
       name:foodNam,
       calories:cals,
       baseUrl:url,
     };
     this.todayFood.push(x);
     console.log(this.todayFood);
    }

    showTodaylist(){

      if(this.showtoday)
      {
      this.showtoday=false;
      this.showform=false;
      }
      else
      {
        this.showtoday=true;
         this.showform=false;
      }
      

    }




}

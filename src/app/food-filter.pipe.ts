import { PipeTransform,Pipe} from '@angular/core';

@Pipe({
    name:'foodfilter',
})
export class foodFilter implements PipeTransform{

     transform(food:any,searchTerm:any):food[]
     {
              if(!food || !searchTerm)
              {
                  return food;
              }

              return food.filter(food => food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1);
     }

}
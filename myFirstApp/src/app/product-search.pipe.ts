import { Pipe, PipeTransform } from '@angular/core';
import { AllProductComponent } from './all-product/all-product.component'
@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: any, arg1: String): any {

    return value.filter((res)=>(res.pName.toLowerCase()).
    startsWith(arg1.toLowerCase()));
     }

}

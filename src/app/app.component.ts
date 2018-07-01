import { Component ,Injectable, OnInit} from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { ClassificationItem } from './ClassificationItem';
import { ClassificationItemService } from './ClassificationItem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  title = 'app';
  public list = [
     {
    "custid":1,
    "deposit":5000,
    "transaction":[
      "25-Jun-2018 12:30PM","15-Jun-2018 02:30 PM"
    ],
    "expense":4000,
    "classification":""
  },
  {
  "custid":2,
  "deposit":5000,
  "transaction":[
    "01-Jun-2018 12:30PM"
  ],
  "expense":1000,
  "classification":""
  },
  {
    "custid":3,
    "deposit":5000,
    "transaction":[
      "25-Jun-2018 09:30AM","25-Jun-2018 11:30AM"
    ],
    "expense":2000,
    "classification":""
  }

]



 ClassificationList: ClassificationItem[];
filter: ClassificationItem = new ClassificationItem();

  constructor(private ClassificationItemService: ClassificationItemService) {
  }

  ngOnInit() {
    // Load books from the books service on init
    this.ClassificationItemService.getList().subscribe(
      (ClassificationList: ClassificationItem[]) => {
        this.ClassificationList = ClassificationList;
      //  this.numberOfBooks = this.books.length;
        //this.limit = this.books.length; // Start off by showing all books on a single page.


      });


  }

  getClassification(id){
  //  console.log(id);
//    console.log("here"+this.ClassificationList[0].transaction);
var classification="";
    for(var i=0 ; i<this.ClassificationList.length;i++){
      if(this.ClassificationList[i].custid==id)
      {
        var deposit = this.ClassificationList[i].deposit;
        var balance = this.ClassificationList[i].balance;

        if((20 / 100) * deposit >= balance){
          classification = "Big Spender";
}
        else if((25 / 100) * deposit <= balance){
          classification = "Potential Saver";
}

return classification;

      }
    }
  }
}

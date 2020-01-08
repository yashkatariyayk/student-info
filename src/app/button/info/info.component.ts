import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl:'info.component.html',
  styles: []
})
export class InfoComponent implements OnInit {

  public students:any[]=[
                        {Name:"Yash",Age:20,Field:"IT",Phone:1234565  },
                        {Name:"Jay",Age:22,Field:"IT",Phone:4547874  },
                        {Name:"Kishan",Age:20,Field:"Civil",Phone:2445487  },
                        {Name:"Devdatt",Age:21,Field:"EC",Phone:2365165  },
                        {Name:"Jayesh",Age:19,Field:"IT",Phone:4564642}
                    ]

  constructor() { }

  ngOnInit() {
  }

}

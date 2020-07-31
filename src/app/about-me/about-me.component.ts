import { Component, OnInit } from '@angular/core';

interface Contact {
  contactimg: string,
  contactname: string,
  contactpost: string,
  contactadd: string,
  contactno: string
  contactinstagram: string
  contactlinkedin: string
  contactfacebook: string
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  contacts: Contact[];
  constructor() { }

  ngOnInit(): void {
    this.contacts = [
			{ 
				contactimg: 'assets/me.jpeg',
			  contactname: 'Branko Bajic',
				contactpost: 'Software Engineer',
				contactadd: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107',
				contactno: '(123) 456-7890',
				contactinstagram: '254',
				contactlinkedin: '54',
				contactfacebook: '154'
			}
		];
  }

//   openDialog(action, obj) {
// 		obj.action = action;
// 		const dialogRef = this.dialog.open(DialogContent ,{
//             data:obj
//     	});

// 		dialogRef.afterClosed().subscribe(result => {
// 			if(result.event == 'Add'){
// 		        this.addContact(result.data);
// 		    }

// 		});
// 	}

}

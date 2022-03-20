import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { ProfileService } from 'src/app/view_model/services/profile/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: '../../view/profile-page/profile-page.component.html',
  styleUrls: ['../../view/profile-page/profile-page.component.css']
})
export class ProfilePageComponent  {
  myUser: User | undefined;
  numInscription: string = '';
  constructor(private serviceProfile: ProfileService) {
    this.myUser = undefined;
   }

 
  async nextUser() {
    //this.user = UserDao.getUserByNumInscription(this.numInscription);
 
   await this.serviceProfile
    .getProfile(this.numInscription)
    .subscribe((data) => {
      
      this.myUser = data;

    });
   
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/abhimanyukumar-lab",
    linkedin: "https://www.linkedin.com/in/abhimanyu-kumar-261367200/",
    gmail: "Abhimanyukumar671@gmail.com",
    instagram : "https://www.instagram.com/abhimanyukumar8536/",
    facebook: "https://www.facebook.com/profile.php?id=100005624087928"
  };
  constructor() { }

  ngOnInit(): void {
  }

}

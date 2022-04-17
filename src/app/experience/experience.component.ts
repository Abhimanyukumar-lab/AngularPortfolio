import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Full Stack Engineer",
        company: "Infosys",
        color: "#3781c2",
        companylogo: "../../../assets/images/infosys.png",
        date: "Upcoming",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Upcoming Software Enginer Specialist(SES) at Infosys",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Computer Science & Engineering",
        company: "Sandip University",
        color: "#3f703f",
        companylogo: "../../../assets/images/sandip.png",
        date: "Aug 2018 – Jul 2022",
        desc: "I have completed my 4 year graduation degree in computer science with overall CGPA 8.6",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Software Engineer Intern",
        company: "Space Ece",
        color: "#ff9102",
        companylogo: "../../../assets/images/space.jpg",
        date: "Feb 2022 – April 2022",
        desc: "The 6- Week winter training focused on full-stack web development and helped learn to work in a team",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}

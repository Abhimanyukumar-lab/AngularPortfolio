import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline = [
    {
      heading: "Infosys",
      duration: "current",
      content: "Upcoming Full stack develover at Infosys!",
      className: "direction-r"
    },
    {
      heading: "B.Tech",
      duration: "2018 - 2022",
      content: "Successfully completed my B.tech in Computer science from Sandip University, Madhubani.",
      className: "direction-l"
    },
    {
      heading: "Intermediate",
      duration: "2013-2015",
      content: "Successfully completed my intermediate studies in 2015 from RCSS college Bihat, Begusarai.\n" +
        "Major: PCM.",
      className: "direction-r"
    },
    {
      heading: "High School",
      duration: "2012-2013",
      content: "Successfully completed my high school studies in 2013 from RSS high school, Begusarai.",
      className: "direction-l"
    }

    ]
  constructor() { }

  ngOnInit(): void {
  }

}

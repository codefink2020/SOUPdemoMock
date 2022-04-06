import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../services/project.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() project:Project
  constructor() { }

  ngOnInit(): void {
  }

}

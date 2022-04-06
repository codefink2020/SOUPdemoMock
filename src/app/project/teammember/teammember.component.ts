import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../services/project.service";

@Component({
  selector: 'app-teammember',
  templateUrl: './teammember.component.html',
  styleUrls: ['./teammember.component.css']
})
export class TeammemberComponent implements OnInit {

  @Input() project:Project
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../services/project.service";

@Component({
  selector: 'app-soup',
  templateUrl: './soup.component.html',
  styleUrls: ['./soup.component.css']
})
export class SoupComponent implements OnInit {
  @Input() project:Project
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../services/project.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() project:Project
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private translateConfigService: TranslateConfigService) { }

  ngOnInit(): void {
  }


}

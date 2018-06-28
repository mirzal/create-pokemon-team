/**
 * createPokémon.team - web application that helps you build your own
 * Pokémon team in any core series game
 * Copyright © 2018  Mirosław Zalewski
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * any later version.
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dual-type-result',
  templateUrl: './dual-type-result.component.html',
  styleUrls: ['./dual-type-result.component.scss']
})
export class DualTypeResultComponent implements OnInit {
  @Input()
  typing;

  constructor() { }

  ngOnInit() {
  }

}

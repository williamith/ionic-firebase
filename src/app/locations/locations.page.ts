import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickImageZoom() {
      let img = document.getElementById('image');
      img.style.width = "2200px";
      img.style.height = "1700px";
      return img;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here be the Photos';
  image1 = 'https://ggscore.com/media/logo/t31743.png';
  image2 = 'https://upload.wikimedia.org/wikipedia/en/4/47/AlabamaFootballClassicLogo.png';
  image3 = 'https://sportslogohistory.com/wp-content/uploads/2020/03/st_louis_blues_1987-1989.png';

  constructor() { }

  ngOnInit() {
  }

}
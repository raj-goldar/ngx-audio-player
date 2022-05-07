import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';


const ELEMENT_DATA: any = [
  {
    id:1,
    title: 'Audio One Title',
    link: 'https://pagalfree.com/musics/128-Bhagwan%20Hai%20Kahan%20Re%20Tu%20-%20PK%20128%20Kbps.mp3',
    artist: 'Audio One Artist',
    // duration: 'Audio One Duration in seconds'
  },
  {
    id:2,
    title: 'Audio Two Title',
    link: 'https://pagalfree.com/musics/128-Dil%20Darbadar%20-%20PK%20128%20Kbps.mp3',
    artist: 'Audio Two Artist',
    // duration: 'Audio Two Duration in seconds'
  },
  {
    id:3,
    title: 'Audio Three Title',
    link: 'https://pagalfree.com/musics/128-Dil%20Darbadar%20-%20PK%20128%20Kbps.mp3',
    artist: 'Audio Three Artist',
    // duration: 'Audio Three Duration in seconds'
  },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayedColumns: string[] = ['id','position', 'name', 'weight'];
  selectedRowIndex: any;
  dataSource = ELEMENT_DATA;

   highlight(row: any,index?:any){
    this.selectedRowIndex = row.id;
    this.msaapPlaylist = [row];
    console.log('testttt',row);
  }

   arrowUpEvent(row: object, index: number){
     console.log(index);
    var nextrow = this.dataSource[index - 2];
    this.highlight(nextrow);
  }

  arrowDownEvent(row: object, index: number){
    console.log(index);
    var nextrow = this.dataSource[index];
     this.highlight(nextrow);
  }

  title = 'ngx-audio-player';
  msaapDisplayTitle = true;
msaapDisplayPlayList = true;
pageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = true;


// Material Style Advance Audio Player Playlist
msaapPlaylist: any=[];

onEnded(e:any){

}

}

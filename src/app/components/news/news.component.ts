import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	
	// MatPaginator Inputs
	length = 1000;
	pageSize = 10;
	activePageDataChunk:Array<any>;
	pageSizeOptions: number[] = [5, 10, 25, 100];	
	
	News:Array<any>;
	
	constructor(private apiService: ApiService) { }

	ngOnInit(): void {
	    this.News = this.apiService.getNews();
		this.activePageDataChunk = this.News.slice(0,this.pageSize);
		//let obj = JSON.parse(this.News);
		let length = Object.keys(this.News).length;
		//console.log(length);
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.News.slice(firstCut, secondCut);
  }

}

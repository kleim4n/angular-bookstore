import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: any;
  booksService: BooksService;
  constructor(booksService: BooksService) {
    this.booksService = booksService;
  }

  ngOnInit(): void {
    this.books = this.booksService.getBook().subscribe((data => {
      this.books = data;
      console.log(this.books);
    }))
  }

}

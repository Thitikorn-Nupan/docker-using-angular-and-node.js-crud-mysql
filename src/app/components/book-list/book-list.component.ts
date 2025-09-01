import {Component, OnInit} from '@angular/core';
import {RomanceHttpService} from "../../service/romance-http.service";
import {Romance} from "../../entity/romance";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  protected readonly title : string = 'Books List'
  private romanceHttpService : RomanceHttpService
  private romances! : Romance[]

  constructor(romanceHttpService: RomanceHttpService) {
    this.romanceHttpService = romanceHttpService;
  }

  ngOnInit(): void {
    this.romanceHttpService.reads().subscribe((response : any) => (this.romances = response.data));
  }

  protected get getRomances(): Romance[] {
    return this.romances;
  }

}

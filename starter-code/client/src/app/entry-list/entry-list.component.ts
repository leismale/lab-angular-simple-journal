import { Component, OnInit } from '@angular/core';
import { JournalService } from 'services/journal.service';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  list: Array<object> = [];
  constructor(public journalService: JournalService) { 
    
  }

  getPost(){
    this.journalService.getJournal().subscribe((lists) => {
      this.list = lists;
    console.log(this.list) });
  }

  ngOnInit() {
    this.getPost();
  }

  refreshPost(){
    this.getPost();
  }
}

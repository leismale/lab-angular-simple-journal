import { Component, OnInit } from '@angular/core';
import { JournalService } from 'services/journal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry: Object;
  entryId : string;
  constructor(public journalService : JournalService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params)=> this.entryId = params['id'])
    this.journalService.getEntry(this.entryId).subscribe((lists) => {
      this.entry = lists;
    })
  }

}

import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { JournalService } from "services/journal.service";

@Component({
  selector: "app-entry-form",
  templateUrl: "./entry-form.component.html",
  styleUrls: ["./entry-form.component.css"]
})
export class EntryFormComponent implements OnInit {
  @Output() onCreatePost = new EventEmitter<string>();
  constructor(public journalService: JournalService) {}

  ngOnInit() {}

  submitForm(myForm) {
    this.journalService
      .postEntry(myForm.value)
      .subscribe(() => this.onCreatePost.emit());
  }
}

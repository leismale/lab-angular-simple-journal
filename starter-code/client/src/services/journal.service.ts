import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class JournalService {
  constructor(public http: Http) {}

  getJournal() {
    return this.http
      .get("http://localhost:3000/api/journal-entries")
      .map(res => {
        console.log(res);
        return res.json();
      });
  }

  getEntry(id) {
    return this.http
      .get(`http://localhost:3000/api/journal-entries/${id}`)
      .map(res => {
        console.log(res);
        return res.json();
      });
  }

  postEntry(entry) {
      console.log(entry)
    return this.http
      .post(`http://localhost:3000/api/journal-entries`,  entry)
      .map(res => {
        console.log(res);
        return res.json();
      });
  }
}

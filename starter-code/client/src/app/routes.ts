import { Routes } from "@angular/router";
import { EntryListComponent } from "./entry-list/entry-list.component";
import { SingleEntryComponent } from "./single-entry/single-entry.component";

export const routes: Routes = [
  { path: '', component: EntryListComponent },
  { path: 'journal-entries/:id', component: SingleEntryComponent },
];

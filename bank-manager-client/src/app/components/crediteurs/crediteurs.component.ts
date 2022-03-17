import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DepensesDisplay} from "../../interfaces/depenses";
import { Crediteurs } from "../../interfaces/crediteurs";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-crediteurs',
  templateUrl: './crediteurs.component.html',
  styleUrls: ['./crediteurs.component.scss']
})
export class CrediteursComponent implements OnInit {
    displayedColumns: string[] = [ 'ID', 'Crediteur', 'Montant' ];
    dataSource: MatTableDataSource<Crediteurs>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    crediteursDisplay : Crediteurs[];
    isLoading: boolean = true;

    constructor() { }

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource<Crediteurs>(this.crediteursDisplay)
    }

}

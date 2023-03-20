import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CREATIVES_MOCK} from "../../../mock";
import {CreativeService} from "../../services/creative.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-creative-edit',
  templateUrl: './creative-edit.component.html',
  styleUrls: ['./creative-edit.component.scss']
})
export class CreativeEditComponent {
  form$!: Observable<any>
  animations: any[] = ['from top', 'from bottom', 'rotate Z', 'scale'];

  constructor(
    private route: ActivatedRoute,
    private creativeService: CreativeService,
  ) {
    this.form$ = this.creativeService.form.asObservable()
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const creative = CREATIVES_MOCK.find(creative => creative._id === id)
      this.creativeService.createForm(creative)
    }
    console.log(this.creativeService.form.value)
  }
}

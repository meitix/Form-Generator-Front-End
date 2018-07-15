import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { TadForm } from '../models/tad-form';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  forms: TadForm[];

  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.forms = [];
  }

  ngOnInit() {
    this.formService.getAllformsFromServer().subscribe(
      (forms: TadForm[]) => {
        this.forms = forms;
      },
      err => {
        console.log(err);
      }
    );
  }

  edit(form: TadForm) {
    this.formService.setCurrentForm(form);
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  delete(form: TadForm) {
    const deleteMessage = 'آیا از حذف این مورد مطمئنید ؟ \n\r عملیات غیر قابل بازگشت میباشد';

    if (confirm(deleteMessage)) {
      this.formService.deleteFrom(form).subscribe(
        (res: boolean) => {
          if (res) {
           this.formService.getAllformsFromServer().subscribe(
             forms => {
                this.forms = forms;
             }
           );
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { TadForm } from '../models/tad-form';
import { ResultService } from '../../services/result.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html'
})
export class FormResultsComponent implements OnInit, OnDestroy {
  idSubscription: Subscription;
  form: TadForm;
  results: any[];
  resultKeies: string[];
  shownKies: string[];

  Results = [
    ['Col1', 'Col2', 'Col3', 'Col4'],
    ['Data', 50, 100, 500],
    ['Data', -100, 20, 100],
    ];
  constructor(
    private route: ActivatedRoute,
    private formService: FormService,
    private router: Router,
    private resultService: ResultService
  ) {}

  ngOnInit() {
    this.idSubscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.formService.getFormById(id).subscribe(formRes => {
        this.form = formRes;

        this.formService.getFormResults(id).subscribe(res => {
          this.results = res;

          let resKies = [];
          (function() {
            const hasOwn = Object.prototype.hasOwnProperty;
            Object.keys = Object_keys;
            function Object_keys(obj) {
              const keys = [];
              let name;
              for (name in obj) {
                if (hasOwn.call(obj, name)) {
                  keys.push(name);
                }
              }
              return keys;
            }
            resKies = Object.keys(res[0]);
          })();
          this.resultKeies = resKies;
          this.shownKies = this.resultKeies;
        });
      });

      // TODO: بهینه کردن نتایج فرم.
      // this.formService.getFormResults(id).subscribe(
      //   res => {
      //     const data = res.data;
      //   },
      //   err => {}
      // );
    });
  }


    getCSV() {
      let CsvString = '';
      this.Results.forEach(function(RowItem, RowIndex) {
        RowItem.forEach(function(ColItem, ColIndex) {
          CsvString += ColItem + ',';
        });
        CsvString += '\r\n';
      });
      CsvString = 'data:application/csv,' + encodeURIComponent(CsvString);
      const x = document.createElement('A');
      x.setAttribute('href', CsvString );
      x.setAttribute('download', 'somedata.csv');
      document.body.appendChild(x);
      x.click();
    }



  edit(result: any) {
    this.resultService.setCurrentResult(result);
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  delete(result: any) {
    if (confirm('آیا مطمئنید ؟ \n\r تغییرات غیر قابل بازگشت است')) {
      this.resultService.delete(result, this.form._id).subscribe(res => {
        if (res.success) {
          this.results = this.results.filter(function(item) {
            return item._id !== result._id;
          });
        } else {
          alert('مشکل در عملیات');
        }
      });
    }
  }

  toggleShow(key: string) {
    if (this.shownKies.indexOf(key) > -1) {
      this.shownKies = this.shownKies.filter(item => {
        return item !== key;
      });
    } else {
      this.shownKies.push(key);
    }
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }
}

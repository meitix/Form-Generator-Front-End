import { Component, OnInit } from '@angular/core';
import { TadForm } from '../models/tad-form';
import { FormService } from '../../services/form.service';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { Subscription } from '../../../../../../node_modules/rxjs';
import { Chart } from './model/chart';
import 'linq';
import { Question } from '../models/question';

@Component({
  selector: 'app-form-charts',
  templateUrl: './form-charts.component.html',
  styleUrls: ['./form-charts.component.css']
})
export class FormChartsComponent implements OnInit {

  form: TadForm;
  charts: Chart[];

  idSubscription: Subscription;
  results: any[];

  constructor(private formService: FormService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idSubscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.formService.getFormById(id).subscribe(formRes => {
        this.form = formRes;

        this.formService.getFormResults(id).subscribe(res => {
          this.results = res;
          this.getChartableResults();
        });
      });
    });
  }

    getChartableResults() {
      const validQuestions = this.form.questions.filter(q => {
        return q.type.title === 'options';
      });

      const resultsForDisplay = [];

      this.results.forEach(item => {
        validQuestions.forEach(element => {
          resultsForDisplay.push(item[element.text]);
        });
      });
      console.log(resultsForDisplay);
      this.makeChartData(validQuestions, resultsForDisplay);
    }

    makeChartData(questions: Question[] , results: any[]) {
// todo: make it complete.
    }

    // this.emailChartType = ChartType.Line;
    // this.emailChartData = {
    //   labels: ['62%', 'x2', 'x3'], // گزینه ها باید بیان اینجا
    //   series: [
    //     [62, 32, 6] // جمع تعداد انتخاب هر گزینه بیاد اینجا
    //   ]
    // };
    // this.emailChartLegendItems = [
    //   { title: 'Open', imageClass: 'fa fa-circle text-info' },
    //   { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
    //   { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
    // ];
}

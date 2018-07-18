import { Component, OnInit } from '@angular/core';
import { ChartType, LegendItem } from 'src/app/modules/lbd/lbd-chart/lbd-chart.component';
import { TadForm } from '../models/tad-form';
import { FormService } from '../../services/form.service';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { Subscription } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-form-charts',
  templateUrl: './form-charts.component.html',
  styleUrls: ['./form-charts.component.css']
})
export class FormChartsComponent implements OnInit {

  form: TadForm;

  public emailChartType: ChartType;
  public emailChartData: any;
  public emailChartLegendItems: LegendItem[];
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
        });
      });
    });

    this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
      };
      this.emailChartLegendItems = [
        { title: 'Open', imageClass: 'fa fa-circle text-info' },
        { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
        { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
      ];
  }

}

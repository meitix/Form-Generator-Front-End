import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';
import { FormService } from '../../../services/form.service';
import { QuestionType } from '../../models/question-type';
import { SweetAlertService} from 'ng2-sweetalert2';


@Component({
  selector: 'app-form-item-create',
  templateUrl: './form-item-create.component.html',
  styleUrls: ['./form-item-create.component.css']
})
export class FormItemCreateComponent implements OnInit {

  @Input() item: Question;
  @Input() itemIndex: number;

  questionTypes: QuestionType[];



  constructor(private formService: FormService , private swal: SweetAlertService) {

   }

  ngOnInit() {
    this.questionTypes = this.formService.getAvalibleQuestionTypes();
  }

  editQuestionType(type: QuestionType) {
    this.item.type = type;
    this.item.options = [];
  }

  deleteQuestion() {

    if (confirm('آیا مطمئنید ؟')) {
      this.formService.removeQuestion(this.item);
    }

    // this.swal.swal({
    //   title: 'Are you sure?',
    //   text: 'You will not be able to recover this imaginary file!',
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes, delete it!',
    //   cancelButtonText: 'No, keep it'
    // }).then(function() {
    //   this.swal.swal(
    //     'Deleted!',
    //     'Your imaginary file has been deleted.',
    //     'success'
    //   );
    // }, function(dismiss) {
    //   // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
    //   if (dismiss === 'cancel') {
    //     this.swal.swal(
    //       'Cancelled',
    //       'Your imaginary file is safe :)',
    //       'error'
    //     );
    //   }
    // });
  }

}

import { QuestionType } from '../components/models/question-type';

   export const QuestionTypesConfig: QuestionType[] = [
      {displayName: 'متن کوتاه' , title: 'short-text' , inputType: 'text' },
      {displayName: 'متن بلند' , title: 'long-text', inputType: 'textarea' },
      {displayName: 'چند گزینه ای' , title: 'options' , inputType: 'options'},
      {displayName: 'انتخاب از نتایج فرم دیگر' , title: 'extended-form'  , inputType: 'extended-form'},
      {displayName: 'عدد' , title: 'number'  , inputType: 'number'},
      {displayName: 'شماره تلفن' , title: 'tel'  , inputType: 'tel'},
      {displayName: 'ایمیل' , title: 'email'  , inputType: 'email'},
     // {displayName: 'مکان' , title: 'location'  , inputType: 'map'},
    //  {displayName: 'فایل' , title: 'file' , inputType: 'file'},
     // {displayName: 'تاریخ' , title: 'date'  , inputType: 'date'}
    ];



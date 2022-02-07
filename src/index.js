
import timer  from "./modules/timer";
import menu  from "./modules/menu";
import modal  from "./modules/modal";
// import validator  from "./modules/validator";
import tabs  from "./modules/tabs";
import slider  from "./modules/slider";
import calc  from "./modules/calc";
import sendForm  from "./modules/sendForm";

timer('28 january 2022')
menu()
modal()
// validator()
tabs()
slider()
calc(100)
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
})

//npm run watch
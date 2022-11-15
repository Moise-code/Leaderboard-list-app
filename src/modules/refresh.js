import { refresh, scoreName } from './newScore';
const refreshPageList = ()=>{
  refresh.addEventListner('click', () =>{
    scoreName.innerHTML = '';
  });
};
export default refreshPageList;
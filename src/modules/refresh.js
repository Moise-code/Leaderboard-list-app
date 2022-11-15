// import { refresh, scoresName } from './newScore.js';

// const refreshPage = () => {
//   refresh.addEventListener('click', () => {
//     scoresName.innerHTML = '';
//   });
// };

// export default refreshPage;
import { refresh, scoreName } from './newScore';
const refreshPageList = ()=>{
  refresh.addEventListner('click', () =>{
    scoreName.innerHTML = '';
  });
};
export default refreshPageList;
import { Outlet, Link } from 'react-router-dom'

function Survey() {
   return (
      <div>
         <h1>Questionnaire</h1>
         {/* width Outlet */}
         <Link to="client">Questionnaire Client</Link>
         <Link to="freelance">Questionnaire Freelance</Link>
         <Outlet />

         {/* widthout Outlet */}
         {/* <Link to="/survey/client">Questionnaire Client</Link>
         <Link to="/survey/freelance">Questionnaire Freelance</Link> */}
      </div>
   )
}
export default Survey

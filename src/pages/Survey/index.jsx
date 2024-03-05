import { Outlet, Link, useParams } from 'react-router-dom'

function Survey() {
   const { questionNumber } = useParams()
   console.log({ questionNumber })

   return (
      <div>
         <h1>Questionnaire</h1>
         <h2>Question {questionNumber}</h2>
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

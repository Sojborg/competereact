import React, { useState } from "react";
import { DashboardContext } from "./DashboardProvider";
import "./Dashboard.css";
import { WorkoutsWidget, LeaguesWidget } from "./Widgets";

export function Dashboard() {
  const [widgets, setWidgets] = useState(new Array<React.ReactChild>(
    <WorkoutsWidget />,
    <LeaguesWidget />      
  ));

  return (
    <div>
    <DashboardContext.Consumer>
      {({widgets}) => (
      <div className='dashboard'>
        {
          widgets.map(widget => {
            return widget
          })
        }
      </div>
      )}
    </DashboardContext.Consumer>
    </div>
  )
}


// export class Dashboard extends React.Component {

//   public render() {
//     return (
//       <div>
//       <DashboardContext.Consumer>
//         {({widgets}) => (
//         <div className='dashboard'>
//           {
//             widgets.map(widget => {
//               return widget
//             })
//           }
//         </div>
//         )}
//       </DashboardContext.Consumer>
//       </div>
//     )
//   }
// }
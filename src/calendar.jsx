import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" 
import Inject from './inject';

export default function Calendar() {
	const handleDateClick = (arg) =>{
		alert(arg.dateStr)
	}
  // return (
  //   <FullCalendar
	// 		width={800}
	// 		height={600}
	// 		initialView="dayGridMonth"
	// 		events={[
	// 			{ title: 'event 1', date: '2024-10-08' },
	// 			{ title: 'event 2', date: '2024-10-09' }
	// 		]}
	// 		plugins={[ dayGridPlugin, interactionPlugin ]}
	// 		// eventContent={Inject}
	// 		dateClick={handleDateClick}
  //   />
  // )


	const daysOfWeek = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
	const monthsOfYear = ['janvier','fevrier','Mars','Avril','May','Juin','Juillet','Aout','Septembre','Octobre','Nevembre','Decembre'];
	return <>
	<FullCalendar
				width={800}
				height={600}
        plugins={[ dayGridPlugin ]}

				events={[
					{ title: 'event 1', date: '2024-10-08' },
					{ title: 'event 2', date: '2024-10-09' }
				]}

        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}

        dayRender={(info) => {
          const dayIndex = info.date.getDay(); 
          const dayName = daysOfWeek[dayIndex]; 
          info.el.innerHTML = dayName; 
        }}
				datesSet={(dateInfo) => {
					const monthIndex = dateInfo.start.getMonth();
					const monthName = monthsOfYear[monthIndex];
	
					const titleElement = document.querySelector('.fc-toolbar-title');
					if (titleElement) {
						titleElement.innerHTML = monthName + ' ' + dateInfo.start.getFullYear();
					}
				}}
				dateClick={handleDateClick}

      />
	</>
}

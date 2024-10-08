export default function Inject() {
    const eventInfo = {
        timeText: "8:00 - 9:00",  // Heure de l'événement
        event: {
          title: "Réunion d'équipe"  // Titre de l'événement
        }
    };
    return(
        <>
					<b>{eventInfo.timeText}</b>
					<i>{eventInfo.event.title}</i>
        </>
      )
}


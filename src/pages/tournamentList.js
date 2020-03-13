import React from 'react';


export default function TournamentList({tournamentList}) {
    return (
      
          <div class="flex flex-column">
        {tournamentList.map(tournament => (
           <div key={tournament.matchID} class="shadow-1 mv2  w-100 pa3 mr2">
           {tournament.seriesName}
         </div>
          
        ))}</div>
     
    )
  }
  
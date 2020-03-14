import React from "react";

import { Link } from "react-router-dom";

export default function TournamentList({ tournamentList }) {
  return (
    <div class="flex flex-column">
      {tournamentList.map(tournament => (
        <div
          key={tournament.matchID}
          className="bg-white shadow-1 mv2  w-100 pa3 mr2 "
        >
          <div class="flex flex-row justify-between">
            <div> {tournament.seriesName}</div>{" "}
            <Link to={`/info${tournament.matchID}`}>
              <svg
                className="w1"
                data-icon="chevronRight"
                viewBox="0 0 32 32"
                style={{ fill: "black" }}
              >
                <title>chevronRight icon</title>
                <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
              </svg>
            </Link>
          </div>
        </div>
      ))}{" "}
    </div>
  );
}

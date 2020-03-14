import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Loading from "./Loading";
import TournamentList from "../pages/tournamentList";

const scheduleList = gql`
  query getMatchSchedule($page: Int, $type: String, $status: String) {
    schedule(type: $type, status: $status, page: $page) {
      matchID
      seriesName
    }
  }
`;
function GetMatchSchedule({ type, status, page }) {
  console.log("i called", type, status, page);
  const { data, loading, error } = useQuery(scheduleList, {
    variables: { type, status, page }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>error</p>;
  }
  console.log();
  return <TournamentList tournamentList={data.schedule} />;
}

export default GetMatchSchedule;

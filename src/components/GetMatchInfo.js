import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Loading from "./Loading";

const MATCH_INFO_QUERY = gql`
  query getMatch($matchID: String) {
    getMatchInfo(matchID: $matchID) {
      seriesID
      seriesName
      date
      toss
      homeTeamName
      awayTeamName
    }
  }
`;

export default function GetMatchInfo({ matchID }) {
  console.log("get match info");
  const { data, loading, error } = useQuery(MATCH_INFO_QUERY, {
    variables: { matchID }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <div class="pa3 pa5-ns">
      <h4 class="f6 fw6">{data.getMatchInfo.seriesName}</h4>

      {/* <dl class="f6 lh-title mv2">
            <dt class="dib b">Date:</dt>
            <dd class="dib ml0 gray">{new Date(data.getMatchInfo.date)}</dd>
          </dl> */}
      <dl class="f6 lh-title mv2">
        <dt class="dib b">Host Team:</dt>
        <dd class="dib ml0 gray">{" " + data.getMatchInfo.homeTeamName}</dd>
      </dl>
      <dl class="f6 lh-title mv2">
        <dt class="dib b">Against: </dt>
        <dd class="dib ml0 gray">{" " + data.getMatchInfo.awayTeamName}</dd>
      </dl>
      <dl class="f6 lh-title mv2">
        <dt class="dib b">Toss:</dt>
        <dd class="dib ml0 gray">
          {data.getMatchInfo.toss
            ? " " + data.getMatchInfo.toss
            : " info not avialable"}
        </dd>
      </dl>
    </div>
  );
}

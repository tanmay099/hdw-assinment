import React from 'react';
import GetMatchInfo from '../components/GetMatchInfo';
import { useParams } from 'react-router-dom';

export default function MatchInfo() {
  let { matchID } = useParams();
    return <GetMatchInfo matchID={matchID}/>
}
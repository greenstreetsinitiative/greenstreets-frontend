import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IMatchParams {
  year: string;
}

const Leaderboard = (props: RouteComponentProps<IMatchParams>) => {
  return <div>This is the leaderboard page for {props.match.params.year}!</div>;
};

export default Leaderboard;

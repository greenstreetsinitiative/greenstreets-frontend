import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IMatchParams {
  year: string;
  id: string;
}

const Company = (props: RouteComponentProps<IMatchParams>) => {
  const { year, id } = props.match.params;
  return (
    <div>
      This is the statistics page for company #{id} in year {year}.
    </div>
  );
};

export default Company;

import React from 'react';
import { map, isEmpty } from 'ramda';
import { observer } from 'mobx-react';
import { breedsStore } from 'models/breeds';
import { Link } from 'react-router-dom';
import { IfElse } from '../components/helpers/if-else';

const renderBreeds = map(({ name }) => (
  <li key={name}>
    <Link to={`breed/${name}`} href={`breed/${name}`}>
      {name}
    </Link>
  </li>
));

@observer
class Breeds extends React.Component {
  componentDidMount() {
    breedsStore.fetch();
  }

  render() {
    const { inProgress, items, count } = breedsStore;

    return (
      <div>
        <h1>Hey hey breeds!</h1>
        <IfElse condition={inProgress}>
          <p>Loading madafaka....</p>
          <h4>{count} breeds loaded</h4>
        </IfElse>
        <ul>
          {!isEmpty(items) && renderBreeds(items)}
        </ul>
      </div>
    );
  }
}

export default Breeds;

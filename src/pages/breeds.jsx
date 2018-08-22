import React from 'react';
import { map, isEmpty } from 'ramda';
import { observer } from 'mobx-react';
import { breedsStore } from 'models/breeds';
import { IfElse } from '../components/helpers/if-else';
import { StateLink } from '../components/state-link/state-link';

const renderBreeds = map(({ name }) => (
  <li key={name}>
    <StateLink to={`breed/${name}`}>
      {name}
    </StateLink>
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

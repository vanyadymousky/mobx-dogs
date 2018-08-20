import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { bookmarksStore } from 'models/bookmarks';
import { Bookmark } from '../components/bookmark/bookmark';
import { IfElse } from '../components/helpers/if-else';

const Breed = observer(({ match: { params: { breed } } }) => (
  <div>
    <h1>Hey hey breed! {breed}</h1>
    <IfElse condition={bookmarksStore.isAdded({ type: 'breed', payload: breed })}>
      bookmarked
      <Bookmark type="breed" payload={breed} />
    </IfElse>
  </div>
));

export default withRouter(Breed);

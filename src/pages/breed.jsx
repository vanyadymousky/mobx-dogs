import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Bookmark } from '../components/bookmark/bookmark';
import { IfElse } from '../components/helpers/if-else';
import './breed.scss';

@inject('breedsStore')
@inject('bookmarksStore')
@inject('routingStore')
@observer
class Breed extends Component {
  componentDidMount() {
    const {
      match: { params },
      breedsStore,
    } = this.props;
    breedsStore.fetchImages(params.breed);
  }

  goToBreeds = () => {
    this.props.routingStore.push('/breeds');
  }

  render() {
    const {
      match: { params },
      bookmarksStore,
      breedsStore,
    } = this.props;
    const { breed } = params;
    const bookmark = {
      type: 'breed',
      payload: breed,
    };
    return (
      <div className="breed">
        <h1 className="text-capitalize">{breed}</h1>
        <IfElse condition={bookmarksStore.isAdded({ type: 'breed', payload: breed })}>
          <Bookmark remove {...bookmark} />
          <Bookmark {...bookmark} />
        </IfElse>
        <Button onClick={this.goToBreeds} className="ml-2" color="blue-b30">Go to breeds</Button>
        <IfElse condition={breedsStore.inProgress}>
          <p>Loading madafaka...</p>
          <ul className="breed-photos pl-0 pt-2">
            {breedsStore.images[breed] && breedsStore.images[breed].map(photo =>
              <div className="breed-photo rounded" style={{ backgroundImage: `url(${photo})` }} key={photo} alt={breed} />)}
          </ul>
        </IfElse>
      </div>
    );
  }
}

export default withRouter(Breed);

import React from 'react';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import { /*selectIsCollectionFetching,*/selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// import { /*updateCollections*/} from '../../redux/shop/shop.actions';

// import WithSpinner from '../../components/with-spinner/with-spinner';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true
  // };

  // unsubscribeFromSnapshot = null;


  componentDidMount() {
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');
    
    // collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match /*isCollectionFetching,*/ /*isCollectionLoaded*/ } = this.props;
    // const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route 
        exact path={`${match.path}`}
        component={CollectionsOverviewContainer}
         /*component={CollectionsOverview}*/
        //  render={props => (
        //   <CollectionsOverviewWithSpinner isLoading={/*loading*/isCollectionFetching} {...props} />
        //  )}
         />
        <Route
         path={`${match.path}/:collectionId`}
         component={CollectionPageContainer}
         /*component={CollectionPage}*/
        //  render={props => (
        //   <CollectionPageWithSpinner isLoading={/*loading*/!isCollectionLoaded} {...props} />
        //  )}
         />
      </div>
    );
  } 
};

// const mapStateToProps = createStructuredSelector({
//   // isCollectionFetching: selectIsCollectionFetching,
//   isCollectionLoaded: selectIsCollectionsLoaded
// });

const mapDispatchToProps = dispatch => ({
  // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null/*,mapStateToProps*/, mapDispatchToProps)(ShopPage);
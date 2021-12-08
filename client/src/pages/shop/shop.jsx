import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner';
// import { /*selectIsCollectionFetching,*/selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// import CollectionPageContainer from '../collection/collection.container';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// import { /*updateCollections*/} from '../../redux/shop/shop.actions';

// import WithSpinner from '../../components/with-spinner/with-spinner';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));


const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

    return (
      <div className='shop-page'>
        <Suspense fallback={<Spinner />}>
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
         </Suspense>
      </div>
    );
  } 


// const mapStateToProps = createStructuredSelector({
//   // isCollectionFetching: selectIsCollectionFetching,
//   isCollectionLoaded: selectIsCollectionsLoaded
// });

const mapDispatchToProps = dispatch => ({
  // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null/*,mapStateToProps*/, mapDispatchToProps)(ShopPage);
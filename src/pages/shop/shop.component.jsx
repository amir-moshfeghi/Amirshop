import React, { Component } from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component'
import {selectCollections} from '../../redux/shop/shop.selectors'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import {Route} from 'react-router-dom';
import CategoryPage from '../../pages/category/category.component'
import Categorypage from '../../pages/category/category.component';
const ShopPage =({match})=>{
   console.log(match);
   
        return (
            <div className='shop-page'>
               <Route exact path={`${match.path}`} component={CollectionOverview} />
               <Route path={`${match.path}/:collectionId`} component={Categorypage} />
            </div>
        );

         }
export default (ShopPage);

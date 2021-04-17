
import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.components';
import  './directory.styles.scss';
import {connect} from 'react-redux';
import {selectDirectorySection} from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect';
const  Directory =({sections})=> 
   
    
  (
            <div className='directory-menu'>
                {sections.map(({id,...sectionProps})=>(
                    <MenuItem key={id} {...sectionProps} />
                ))}
            </div>
        )
    

const mapStateToProps = createStructuredSelector({
  sections :selectDirectorySection
})
export default connect(mapStateToProps)(Directory);



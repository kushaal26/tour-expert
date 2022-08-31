import React,{useReducer} from 'react';
import {Header} from './components/Header'
import { FeatureTabs } from './components/Tabs'
import {ContentScreen} from './components/ContentScreen'
import "./App.css"
import 'antd/dist/antd.css';

import { Satellite } from '@material-ui/icons';


export default function App() {
  return (
    <div className="firstclass">
      <Header></Header>
      <div style={{paddingLeft:"10px", paddingTop: "10px",paddingRight: "10px"}}>
      <FeatureTabs></FeatureTabs>
         {/* // <ContentScreen ></ContentScreen> */}
        </div>
    </div>
  );
}
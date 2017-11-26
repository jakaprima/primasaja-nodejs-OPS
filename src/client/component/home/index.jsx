import React, { Component } from 'react'
// import { connect } from "react-redux";
import HomeHeroUnit from './HomeHeroUnit.jsx'
import FeatureTemplateContainer from '../../containers/home/FeatureTemplateContainer.jsx'
import LuckyDraw from './LuckyDraw.jsx'
import HowItWork from './HowItWork.jsx'
import EditorPick from './EditorPick.jsx'
import RentNextSeason from './RentNextSeason.jsx'
import OprentStylist from './OprentStylist.jsx'
import GetList from './GetList.jsx'
import Footer from '../footer/index.jsx'
import './css/Homepage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="content-box">
        <HomeHeroUnit/>
        <FeatureTemplateContainer/>
        <LuckyDraw/>
        <HowItWork/>
        <EditorPick/>
        <RentNextSeason/>
        <OprentStylist/>
        <GetList/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage

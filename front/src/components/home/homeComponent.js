import React from 'react';
import { Icon , Affix , BackTop } from 'antd';
import { browserHistory } from "react-router";

import BackTopComponent from '../commonComponent/commonBackTop'
import BigImgBanners from './bigImgBanner/bigImgBanner'
import BrandBannerAds from './brandBannerAds/brandBannerAds'
import MiddleAdv from './middleAdv/middleAdv'
import HotSale from './hotSale/hotSale'
import RecommendFruit from './recommend/recommend'
import TopMenu from './topMenu/topMenu'

import './home.scss';

export default class HomeComponent extends React.Component {
 
    scrollTop(){
        scrollTo(0,0)
    }

    render(){
        return (
            <div>
                <TopMenu />
                <section className="container home" style={{paddingTop: 10}}>
                    <div className="swiper-container home-swiper">
                        <div className="swiper-wrapper" >
                            <div className="swiper-slide">
                                <BrandBannerAds />
                                <MiddleAdv />
                                <HotSale />
                                <BigImgBanners />
                                <RecommendFruit />
                            </div>
                        </div>
                    </div>
                    <div id="backTop" onClick={this.scrollTop.bind(this)}>返回顶部</div>
                </section>
            </div>
        )
    }
}
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import './css/bootstrap.min.css';
//import './css/icofont.min.css';
//import './css/owl.carousel.min.css';
//import './css/boxicons.min.css';
import './css/venobox.css';
//import classNames from './style.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header id="header" class="header-tops" className="overflow-y:hidden;overflow-x: hidden;" className={clsx('hero hero--primary', styles.heroBanner)}>
    <link href="./index.style.css" rel="classNamesheet" />
    <div class="kratos-overlay"><div class="filter"></div><canvas id="canvas" width="1920" height="939"></canvas></div>
    <div class="container" >
     <h1>
     <a href="https://lesun.cloud/" class="mr-auto">
     <img src="https://zzcdn.uerr.cn/cloudreve/uploads/2023/02/10/BAAJvpal_yuncuncu.png" alt="" class="img-fluid" className="height:80px" /> 晞云云计算</a>
     </h1>
      <h2>保持热爱，共赴山海 .</h2>
      <h2>
        <a class="sns-xcx" href="/docs">
        <i class="zm iconfont icon-link"></i>
        查看文档</a>
      </h2>
      <div id="page-info" className="display:block">
            <p id="bginfo" class="d-lg-block">Music ID <a href="https://music.163.com/#/playlist?id=8287113265" target="_blank">8287113265</a>
            <br />
            Survival Time 
            <a><span id="sitetime"></span></a><br />
            Filing Mumber <a href="https://beian.miit.gov.cn/">粤ICP备2023028108号-1</a>
            </p>
        </div>
    </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`MENU`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

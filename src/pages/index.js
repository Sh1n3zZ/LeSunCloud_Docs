import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import stylebootstrap from './css/bootstrap.min.module.css';
import styleboxicons from './css/boxicons.min.module.css';
import stylefont1 from './css/font1.module.css';
import stylefont2 from './css/font2.module.css';
import stylemainstyle from './mainstyle.module.css';
import stylevenobox from './css/venobox.module.css';
import styleDvemeS4Ever from './css/wiki.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header id="header" className={stylemainstyle.header-tops} style="overflow-y:hidden;overflow-x: hidden;">
    <div className={styleDvemeS4Ever.kratos-overlay}><div className={styleDvemeS4Ever.filter}></div><canvas id="canvas" width="1920" height="939"></canvas></div>
    <div className={stylemainstyle.container}>
     <h1>
     <a href="https://lesun.cloud/" className={stylebootstrap.mr-auto}>
     <img src="https://zzcdn.uerr.cn/cloudreve/uploads/2023/02/10/BAAJvpal_yuncuncu.png" alt="" className={stylebootstrap.img-fluid} style={{ height: "80px" }} /> 晞云云计算</a>
     </h1>
      <h2>保持热爱，共赴山海 .</h2>
      <h2>
        <a className={styleDvemeS4Ever.sns-xcx} href="/docs/ProductIntroduction">
        <i className={`${stylefont1.zm} ${stylefont2.iconfont} ${stylefont2.icon-link}`}></i>
        查看文档</a>
      </h2>
      <div id="page-info" style="display:block">
            <p id="bginfo" className={stylebootstrap.d-lg-block}>Music ID <a href="https://music.163.com/#/playlist?id=8287113265" target="_blank">8287113265</a>
            <br />
            Design By <a href="https://shinezz.cc">Sh1n3zZ</a>
            <a><span id="sitetime"></span></a><br />
            Filing Mumber <a href="https://beian.miit.gov.cn/">粤ICP备2023028108号-1</a>
            </p>
        </div>
    </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}

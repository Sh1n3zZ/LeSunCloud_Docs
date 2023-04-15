import React from 'react';
import clsx from 'clsx';
import './css/bootstrap.min.css';
import './css/boxicons.min.css';
import './css/wiki.css';
import './css/venobox.css';
import './index.style.css';
import './css/font_954744_g42joo6uzdr.css';
import './css/font_2334619_bg75usmacm.css';

export default function HomepageFeatures() {
    return (
        <section>
        <div class="kratos-overlay"><div class="filter"></div><canvas id="canvas" width="1920" height="939"></canvas></div>
        <div class="container" >
         <h1>
         <a href="https://lesun.cloud/" class="mr-auto">
         <img src="https://zzcdn.uerr.cn/cloudreve/uploads/2023/02/10/BAAJvpal_yuncuncu.png" alt="" class="img-fluid" style={{ height: "80px" }} /> 晞云云计算</a>
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
                Design By <a href="https://shinezz.cc">Sh1n3zZ</a>
                <a><span id="sitetime"></span></a><br />
                Filing Mumber <a href="https://beian.miit.gov.cn/">粤ICP备2023028108号-1</a>
                </p>
            </div>
        </div>
        </section>
    );
}
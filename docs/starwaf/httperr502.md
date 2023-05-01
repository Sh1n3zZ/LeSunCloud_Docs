# 502 Bad Gateway
## 为什么会出现这种情况？
官方的解释应为：作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。  
顾名思义，收到无效响应，即请求被上游服务器拦截  
在使用我们的 CDN 出现这种情况时，一般是由于您的服务器防火墙将我们的节点拦截从而导致我们的节点无法拉取您的服务器（即源站）网站上的内容，导致节点无法给用户提供内容，故返回 **502 Bad Gateway** 报错  
当出现此报错时，您看到的界面应是这样的
![502 Bad Gateway](https://zzcdn.uerr.cn/cloudreve/uploads/2023/05/01/Vra9DDW1_QQ%E6%88%AA%E5%9B%BE20230501204159.png)

## 我应如何解决？
因为此报错出现的原因为 **请求被上游服务器拦截** ，所以您应当检查您的源站 **防火墙设置** 是否出现了问题  
可行的解决方案：  
### 直接关闭源站防火墙
为 **快速、直接** 解决问题，您可以直接关闭您源站的防火墙，这可能会为您的源站带来安全风险，但 **由于使用 CDN 无法直接获取真实源站 ip** ，因此 **在源站 ip没有泄露的情况下您的源站仍然是安全的** 所以您可以通过关闭源站防火墙来解决回源被拦截  

**如您是 CentOS 用户，请执行如下操作：**
```ts
systemctl disable firewalld
```

**如您是 Debian / Ubuntu 用户，请执行如下操作：**
```ts
sudo ufw disable
```

**如您是 宝塔面板 用户，请执行如下操作：**  
1.在首页点击 **软件管理**  
2.在 **软件管理** 中选择 **你已经安装的系统防火墙软件**  
![打开宝塔面板中的防火墙软件](https://zzcdn.uerr.cn/cloudreve/uploads/2023/05/01/oC90YbKF_ScreenShot1_Step1.png)
3.在 **软件 - 管理** 中选择 **关闭防火墙**  
![关闭防火墙](https://zzcdn.uerr.cn/cloudreve/uploads/2023/05/01/WPoqTSr7_QQ%E6%88%AA%E5%9B%BE20230501215153.png)

### 给我们的 CDN 节点加白
**由于过程较为复杂，这里拿 CentOS 作为例子，其他系统请自行 Google 加白方法**

1.将指定 ip 地址添加到防火墙白名单中：
```ts
iptables -I INPUT -s <IP地址> -j ACCEPT
```

2.保存防火墙规则
```ts
service iptables save
```
如您使用的是  **CentOS7 以上版本** ，则可以使用以下方式：
```ts
iptables-save > /etc/sysconfig/iptables
```

3.重载防火墙规则
```ts
systemctl restart iptables
```

**进阶：** 删除已添加的防火墙白名单 ip  
将以上第一步内容替换为以下内容：
```ts
iptables -D INPUT -s <IP地址> -j ACCEPT
```

import{_ as o,M as d,p as r,q as p,R as t,t as a,N as e,a1 as n}from"./framework-204010b2.js";const l={},i=n(`<h1 id="前端文档" tabindex="-1"><a class="header-anchor" href="#前端文档" aria-hidden="true">#</a> 前端文档</h1><blockquote><p>v1.0.0</p></blockquote><p>Base URLs:</p><ul><li><a href="http://localhost:8080">开发环境: http://localhost:8080</a></li></ul><h1 id="usercontroller" tabindex="-1"><a class="header-anchor" href="#usercontroller" aria-hidden="true">#</a> UserController</h1><h2 id="get-get" tabindex="-1"><a class="header-anchor" href="#get-get" aria-hidden="true">#</a> GET get</h2><p>GET /users/{id}</p><h3 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h3><table><thead><tr><th>名称</th><th>位置</th><th>类型</th><th>必选</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>path</td><td>string</td><td>是</td><td>none</td></tr><tr><td>Authorization</td><td>header</td><td>string</td><td>否</td><td>none</td></tr></tbody></table><blockquote><p>返回示例</p></blockquote><blockquote><p>成功</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;flag&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lastLoginIp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lastLoginTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;roles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果" tabindex="-1"><a class="header-anchor" href="#返回结果" aria-hidden="true">#</a> 返回结果</h3>`,13),u=t("thead",null,[t("tr",null,[t("th",null,"状态码"),t("th",null,"状态码含义"),t("th",null,"说明"),t("th",null,"数据模型")])],-1),c=t("td",null,"200",-1),h={href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"},k=t("td",null,"成功",-1),q=t("td",null,"Inline",-1),b=n(`<h3 id="返回数据结构" tabindex="-1"><a class="header-anchor" href="#返回数据结构" aria-hidden="true">#</a> 返回数据结构</h3><p>状态码 <strong>200</strong></p><h4 id="枚举值" tabindex="-1"><a class="header-anchor" href="#枚举值" aria-hidden="true">#</a> 枚举值</h4><table><thead><tr><th>属性</th><th>值</th></tr></thead><tbody><tr><td>gender</td><td>FEMALE</td></tr><tr><td>gender</td><td>MALE</td></tr><tr><td>gender</td><td>男</td></tr><tr><td>gender</td><td>女</td></tr><tr><td>gender</td><td>UNKNOWN</td></tr><tr><td>gender</td><td>ALL</td></tr></tbody></table><h2 id="put-update" tabindex="-1"><a class="header-anchor" href="#put-update" aria-hidden="true">#</a> PUT update</h2><p>PUT /users/{id}</p><blockquote><p>Body 请求参数</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-1" tabindex="-1"><a class="header-anchor" href="#请求参数-1" aria-hidden="true">#</a> 请求参数</h3><table><thead><tr><th>名称</th><th>位置</th><th>类型</th><th>必选</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>path</td><td>string</td><td>是</td><td>none</td></tr><tr><td>Content-Type</td><td>header</td><td>string</td><td>是</td><td>none</td></tr><tr><td>Authorization</td><td>header</td><td>string</td><td>否</td><td>none</td></tr><tr><td>body</td><td>body</td><td><a href="#schemauserupdaterequest">UserUpdateRequest</a></td><td>否</td><td>none</td></tr></tbody></table><blockquote><p>返回示例</p></blockquote><blockquote><p>成功</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;flag&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lastLoginIp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lastLoginTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;roles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-1" tabindex="-1"><a class="header-anchor" href="#返回结果-1" aria-hidden="true">#</a> 返回结果</h3>`,14),v=t("thead",null,[t("tr",null,[t("th",null,"状态码"),t("th",null,"状态码含义"),t("th",null,"说明"),t("th",null,"数据模型")])],-1),g=t("td",null,"200",-1),m={href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"},y=t("td",null,"成功",-1),f=t("td",null,"Inline",-1),_=n(`<h3 id="返回数据结构-1" tabindex="-1"><a class="header-anchor" href="#返回数据结构-1" aria-hidden="true">#</a> 返回数据结构</h3><p>状态码 <strong>200</strong></p><p><em>返回数据</em></p><table><thead><tr><th>名称</th><th>类型</th><th>必选</th><th>约束</th><th>中文名</th><th>说明</th></tr></thead><tbody><tr><td>» flag</td><td>boolean</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» code</td><td>integer</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» message</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» data</td><td><a href="#schemauservo">UserVo</a></td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»» lastLoginTime</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»» gender</td><td>string</td><td>false</td><td>none</td><td></td><td>枚举说明: FEMALE :FEMALE<br>MALE :MALE<br>男 :男<br>女 :女<br>UNKNOWN :UNKNOWN<br>ALL :ALL</td></tr><tr><td>»» roles</td><td>[<a href="#schemarole">Role</a>]</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»»» updatedTime</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»»» name</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»»» createdTime</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»»» id</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»»» title</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»» nickname</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»» id</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»» enabled</td><td>integer</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»» username</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>»» lastLoginIp</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr></tbody></table><h4 id="枚举值-1" tabindex="-1"><a class="header-anchor" href="#枚举值-1" aria-hidden="true">#</a> 枚举值</h4><table><thead><tr><th>属性</th><th>值</th></tr></thead><tbody><tr><td>gender</td><td>FEMALE</td></tr><tr><td>gender</td><td>MALE</td></tr><tr><td>gender</td><td>男</td></tr><tr><td>gender</td><td>女</td></tr><tr><td>gender</td><td>UNKNOWN</td></tr><tr><td>gender</td><td>ALL</td></tr></tbody></table><h2 id="delete-delete" tabindex="-1"><a class="header-anchor" href="#delete-delete" aria-hidden="true">#</a> DELETE delete</h2><p>DELETE /users/{id}</p><h3 id="请求参数-2" tabindex="-1"><a class="header-anchor" href="#请求参数-2" aria-hidden="true">#</a> 请求参数</h3><table><thead><tr><th>名称</th><th>位置</th><th>类型</th><th>必选</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>path</td><td>string</td><td>是</td><td>none</td></tr><tr><td>Authorization</td><td>header</td><td>string</td><td>否</td><td>none</td></tr></tbody></table><blockquote><p>返回示例</p></blockquote><blockquote><p>成功</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;flag&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-2" tabindex="-1"><a class="header-anchor" href="#返回结果-2" aria-hidden="true">#</a> 返回结果</h3>`,14),x=t("thead",null,[t("tr",null,[t("th",null,"状态码"),t("th",null,"状态码含义"),t("th",null,"说明"),t("th",null,"数据模型")])],-1),L=t("td",null,"200",-1),E={href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"},j=t("td",null,"成功",-1),T=t("td",null,"Inline",-1),U=n(`<h3 id="返回数据结构-2" tabindex="-1"><a class="header-anchor" href="#返回数据结构-2" aria-hidden="true">#</a> 返回数据结构</h3><p>状态码 <strong>200</strong></p><p><em>返回数据</em></p><table><thead><tr><th>名称</th><th>类型</th><th>必选</th><th>约束</th><th>中文名</th><th>说明</th></tr></thead><tbody><tr><td>» flag</td><td>boolean</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» code</td><td>integer</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» message</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» data</td><td>null</td><td>false</td><td>none</td><td></td><td>none</td></tr></tbody></table><h2 id="post-create" tabindex="-1"><a class="header-anchor" href="#post-create" aria-hidden="true">#</a> POST create</h2><p>POST /users/</p><blockquote><p>Body 请求参数</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求参数-3" tabindex="-1"><a class="header-anchor" href="#请求参数-3" aria-hidden="true">#</a> 请求参数</h3><table><thead><tr><th>名称</th><th>位置</th><th>类型</th><th>必选</th><th>说明</th></tr></thead><tbody><tr><td>Content-Type</td><td>header</td><td>string</td><td>是</td><td>none</td></tr><tr><td>Authorization</td><td>header</td><td>string</td><td>否</td><td>none</td></tr><tr><td>body</td><td>body</td><td><a href="#schemausercreatedto">UserCreateDto</a></td><td>否</td><td>none</td></tr></tbody></table><blockquote><p>返回示例</p></blockquote><blockquote><p>成功</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastLoginIp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastLoginTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;roles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;createdTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;updatedTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-3" tabindex="-1"><a class="header-anchor" href="#返回结果-3" aria-hidden="true">#</a> 返回结果</h3>`,14),A=t("thead",null,[t("tr",null,[t("th",null,"状态码"),t("th",null,"状态码含义"),t("th",null,"说明"),t("th",null,"数据模型")])],-1),N=t("td",null,"200",-1),M={href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"},O=t("td",null,"成功",-1),I=t("td",null,[t("a",{href:"#schemauservo"},"UserVo")],-1),K=n(`<h2 id="get-search" tabindex="-1"><a class="header-anchor" href="#get-search" aria-hidden="true">#</a> GET search</h2><p>GET /users/list</p><h3 id="请求参数-4" tabindex="-1"><a class="header-anchor" href="#请求参数-4" aria-hidden="true">#</a> 请求参数</h3><table><thead><tr><th>名称</th><th>位置</th><th>类型</th><th>必选</th><th>说明</th></tr></thead><tbody><tr><td>Authorization</td><td>header</td><td>string</td><td>否</td><td>none</td></tr></tbody></table><blockquote><p>返回示例</p></blockquote><blockquote><p>成功</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="返回结果-4" tabindex="-1"><a class="header-anchor" href="#返回结果-4" aria-hidden="true">#</a> 返回结果</h3>`,8),R=t("thead",null,[t("tr",null,[t("th",null,"状态码"),t("th",null,"状态码含义"),t("th",null,"说明"),t("th",null,"数据模型")])],-1),S=t("td",null,"200",-1),V={href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"},C=t("td",null,"成功",-1),F=t("td",null,"Inline",-1),W=n(`<h3 id="返回数据结构-3" tabindex="-1"><a class="header-anchor" href="#返回数据结构-3" aria-hidden="true">#</a> 返回数据结构</h3><h2 id="get-getallloginusers" tabindex="-1"><a class="header-anchor" href="#get-getallloginusers" aria-hidden="true">#</a> GET getAllLoginUsers</h2><p>GET /users/getallLoginUsers</p><h3 id="请求参数-5" tabindex="-1"><a class="header-anchor" href="#请求参数-5" aria-hidden="true">#</a> 请求参数</h3><table><thead><tr><th>名称</th><th>位置</th><th>类型</th><th>必选</th><th>说明</th></tr></thead><tbody><tr><td>Authorization</td><td>header</td><td>string</td><td>否</td><td>none</td></tr></tbody></table><blockquote><p>返回示例</p></blockquote><blockquote><p>成功</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;flag&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回结果-5" tabindex="-1"><a class="header-anchor" href="#返回结果-5" aria-hidden="true">#</a> 返回结果</h3>`,9),z=t("thead",null,[t("tr",null,[t("th",null,"状态码"),t("th",null,"状态码含义"),t("th",null,"说明"),t("th",null,"数据模型")])],-1),B=t("td",null,"200",-1),D={href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank",rel:"noopener noreferrer"},G=t("td",null,"成功",-1),w=t("td",null,"Inline",-1),P=n(`<h3 id="返回数据结构-4" tabindex="-1"><a class="header-anchor" href="#返回数据结构-4" aria-hidden="true">#</a> 返回数据结构</h3><p>状态码 <strong>200</strong></p><p><em>返回数据</em></p><table><thead><tr><th>名称</th><th>类型</th><th>必选</th><th>约束</th><th>中文名</th><th>说明</th></tr></thead><tbody><tr><td>» flag</td><td>boolean</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» code</td><td>integer</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» message</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>» data</td><td>null</td><td>false</td><td>none</td><td></td><td>none</td></tr></tbody></table><h1 id="数据模型" tabindex="-1"><a class="header-anchor" href="#数据模型" aria-hidden="true">#</a> 数据模型</h1><h2 id="tocS_UserCreateDto">UserCreateDto</h2><p><a id="schemausercreatedto"></a><a id="schema_UserCreateDto"></a><a id="tocSusercreatedto"></a><a id="tocsusercreatedto"></a></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th>名称</th><th>类型</th><th>必选</th><th>约束</th><th>中文名</th><th>说明</th></tr></thead><tbody><tr><td>password</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>username</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr></tbody></table><h2 id="tocS_UserUpdateRequest">UserUpdateRequest</h2><p><a id="schemauserupdaterequest"></a><a id="schema_UserUpdateRequest"></a><a id="tocSuserupdaterequest"></a><a id="tocsuserupdaterequest"></a></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th>名称</th><th>类型</th><th>必选</th><th>约束</th><th>中文名</th><th>说明</th></tr></thead><tbody><tr><td>gender</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>nickname</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>username</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr></tbody></table><h2 id="tocS_UserVo">UserVo</h2><p><a id="schemauservo"></a><a id="schema_UserVo"></a><a id="tocSuservo"></a><a id="tocsuservo"></a></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;lastLoginTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FEMALE&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;roles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;updatedTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;createdTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastLoginIp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性-2" tabindex="-1"><a class="header-anchor" href="#属性-2" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th>名称</th><th>类型</th><th>必选</th><th>约束</th><th>中文名</th><th>说明</th></tr></thead><tbody><tr><td>lastLoginTime</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>gender</td><td>string</td><td>false</td><td>none</td><td></td><td>枚举说明: FEMALE :FEMALE<br>MALE :MALE<br>男 :男<br>女 :女<br>UNKNOWN :UNKNOWN<br>ALL :ALL</td></tr><tr><td>roles</td><td>[<a href="#schemarole">Role</a>]</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>nickname</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>id</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>enabled</td><td>integer</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>username</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>lastLoginIp</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr></tbody></table><h4 id="枚举值-2" tabindex="-1"><a class="header-anchor" href="#枚举值-2" aria-hidden="true">#</a> 枚举值</h4><table><thead><tr><th>属性</th><th>值</th></tr></thead><tbody><tr><td>gender</td><td>FEMALE</td></tr><tr><td>gender</td><td>MALE</td></tr><tr><td>gender</td><td>男</td></tr><tr><td>gender</td><td>女</td></tr><tr><td>gender</td><td>UNKNOWN</td></tr><tr><td>gender</td><td>ALL</td></tr></tbody></table><h2 id="tocS_Role">Role</h2><p><a id="schemarole"></a><a id="schema_Role"></a><a id="tocSrole"></a><a id="tocsrole"></a></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;updatedTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;createdTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性-3" tabindex="-1"><a class="header-anchor" href="#属性-3" aria-hidden="true">#</a> 属性</h3><table><thead><tr><th>名称</th><th>类型</th><th>必选</th><th>约束</th><th>中文名</th><th>说明</th></tr></thead><tbody><tr><td>updatedTime</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>name</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>createdTime</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>id</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr><tr><td>title</td><td>string</td><td>false</td><td>none</td><td></td><td>none</td></tr></tbody></table>`,27);function H(J,Q){const s=d("ExternalLinkIcon");return r(),p("div",null,[i,t("table",null,[u,t("tbody",null,[t("tr",null,[c,t("td",null,[t("a",h,[a("OK"),e(s)])]),k,q])])]),b,t("table",null,[v,t("tbody",null,[t("tr",null,[g,t("td",null,[t("a",m,[a("OK"),e(s)])]),y,f])])]),_,t("table",null,[x,t("tbody",null,[t("tr",null,[L,t("td",null,[t("a",E,[a("OK"),e(s)])]),j,T])])]),U,t("table",null,[A,t("tbody",null,[t("tr",null,[N,t("td",null,[t("a",M,[a("OK"),e(s)])]),O,I])])]),K,t("table",null,[R,t("tbody",null,[t("tr",null,[S,t("td",null,[t("a",V,[a("OK"),e(s)])]),C,F])])]),W,t("table",null,[z,t("tbody",null,[t("tr",null,[B,t("td",null,[t("a",D,[a("OK"),e(s)])]),G,w])])]),P])}const Y=o(l,[["render",H],["__file","index.html.vue"]]);export{Y as default};

---
home: true
title: 肌理肌理分布式框架系统 v1.0.0
heroImage: /images/hero.png
actions:
- text: Get Started
  link: /guide/getting-started.html
  type: primary
- text: Introduction
  link: /guide/
  type: secondary
  features:
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
- title: Themes
  details: Providing a default theme out of the box. You can also choose a community theme or create your own one.
- title: Plugins
  details: Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.
- title: Bundlers
  details: Default bundler is Vite, while Webpack is also supported. Choose the one you like!
  footer: MIT Licensed | Copyright © 2018-present Evan You
---

# 肌理肌理分布式框架系统

> v1.0.0

Base URLs:

* <a href="http://localhost:8080">开发环境: http://localhost:8080</a>

# UserController

## GET get

GET /users/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 成功

```json
{
  "flag": false,
  "code": 0,
  "message": "",
  "data": {
    "id": "",
    "username": "",
    "nickname": "",
    "gender": "",
    "enabled": 0,
    "lastLoginIp": "",
    "lastLoginTime": "",
    "roles": [
      {
        "name": "",
        "title": "",
        "id": "",
        "createdTime": "",
        "updatedTime": ""
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**



#### 枚举值

|属性|值|
|---|---|
|gender|FEMALE|
|gender|MALE|
|gender|男|
|gender|女|
|gender|UNKNOWN|
|gender|ALL|

## PUT update

PUT /users/{id}

> Body 请求参数

```json
{
  "gender": "string",
  "nickname": "string",
  "username": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|Content-Type|header|string| 是 |none|
|Authorization|header|string| 否 |none|
|body|body|[UserUpdateRequest](#schemauserupdaterequest)| 否 |none|

> 返回示例

> 成功

```json
{
  "flag": false,
  "code": 0,
  "message": "",
  "data": {
    "id": "",
    "username": "",
    "nickname": "",
    "gender": "",
    "enabled": 0,
    "lastLoginIp": "",
    "lastLoginTime": "",
    "roles": [
      {
        "name": "",
        "title": "",
        "id": "",
        "createdTime": "",
        "updatedTime": ""
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

*返回数据*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» flag|boolean|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» data|[UserVo](#schemauservo)|false|none||none|
|»» lastLoginTime|string|false|none||none|
|»» gender|string|false|none||枚举说明: FEMALE :FEMALE<br />MALE :MALE<br />男 :男<br />女 :女<br />UNKNOWN :UNKNOWN<br />ALL :ALL|
|»» roles|[[Role](#schemarole)]|false|none||none|
|»»» updatedTime|string|false|none||none|
|»»» name|string|false|none||none|
|»»» createdTime|string|false|none||none|
|»»» id|string|false|none||none|
|»»» title|string|false|none||none|
|»» nickname|string|false|none||none|
|»» id|string|false|none||none|
|»» enabled|integer|false|none||none|
|»» username|string|false|none||none|
|»» lastLoginIp|string|false|none||none|

#### 枚举值

|属性|值|
|---|---|
|gender|FEMALE|
|gender|MALE|
|gender|男|
|gender|女|
|gender|UNKNOWN|
|gender|ALL|

## DELETE delete

DELETE /users/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 成功

```json
{
  "flag": false,
  "code": 0,
  "message": "",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

*返回数据*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» flag|boolean|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST create

POST /users/

> Body 请求参数

```json
{
  "password": "string",
  "username": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Content-Type|header|string| 是 |none|
|Authorization|header|string| 否 |none|
|body|body|[UserCreateDto](#schemausercreatedto)| 否 |none|

> 返回示例

> 成功

```json
{
  "id": "",
  "username": "",
  "nickname": "",
  "gender": "",
  "enabled": 0,
  "lastLoginIp": "",
  "lastLoginTime": "",
  "roles": [
    {
      "name": "",
      "title": "",
      "id": "",
      "createdTime": "",
      "updatedTime": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|[UserVo](#schemauservo)|

## GET search

GET /users/list

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 否 |none|

> 返回示例

> 成功

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET getAllLoginUsers

GET /users/getallLoginUsers

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 否 |none|

> 返回示例

> 成功

```json
{
  "flag": false,
  "code": 0,
  "message": "",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

*返回数据*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» flag|boolean|false|none||none|
|» code|integer|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

# 数据模型

<h2 id="tocS_UserCreateDto">UserCreateDto</h2>

<a id="schemausercreatedto"></a>
<a id="schema_UserCreateDto"></a>
<a id="tocSusercreatedto"></a>
<a id="tocsusercreatedto"></a>

```json
{
  "password": "string",
  "username": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|password|string|false|none||none|
|username|string|false|none||none|

<h2 id="tocS_UserUpdateRequest">UserUpdateRequest</h2>

<a id="schemauserupdaterequest"></a>
<a id="schema_UserUpdateRequest"></a>
<a id="tocSuserupdaterequest"></a>
<a id="tocsuserupdaterequest"></a>

```json
{
  "gender": "string",
  "nickname": "string",
  "username": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|gender|string|false|none||none|
|nickname|string|false|none||none|
|username|string|false|none||none|

<h2 id="tocS_UserVo">UserVo</h2>

<a id="schemauservo"></a>
<a id="schema_UserVo"></a>
<a id="tocSuservo"></a>
<a id="tocsuservo"></a>

```json
{
  "lastLoginTime": "string",
  "gender": "FEMALE",
  "roles": [
    {
      "updatedTime": "string",
      "name": "string",
      "createdTime": "string",
      "id": "string",
      "title": "string"
    }
  ],
  "nickname": "string",
  "id": "string",
  "enabled": 0,
  "username": "string",
  "lastLoginIp": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|lastLoginTime|string|false|none||none|
|gender|string|false|none||枚举说明: FEMALE :FEMALE<br />MALE :MALE<br />男 :男<br />女 :女<br />UNKNOWN :UNKNOWN<br />ALL :ALL|
|roles|[[Role](#schemarole)]|false|none||none|
|nickname|string|false|none||none|
|id|string|false|none||none|
|enabled|integer|false|none||none|
|username|string|false|none||none|
|lastLoginIp|string|false|none||none|

#### 枚举值

|属性|值|
|---|---|
|gender|FEMALE|
|gender|MALE|
|gender|男|
|gender|女|
|gender|UNKNOWN|
|gender|ALL|

<h2 id="tocS_Role">Role</h2>

<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "updatedTime": "string",
  "name": "string",
  "createdTime": "string",
  "id": "string",
  "title": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|updatedTime|string|false|none||none|
|name|string|false|none||none|
|createdTime|string|false|none||none|
|id|string|false|none||none|
|title|string|false|none||none|


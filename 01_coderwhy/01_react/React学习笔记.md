# React学习笔记









### 安装styled-components



node版本不匹配，安装时指定匹配的版本



```
PS D:\04_GitHub\react\资料day01~day30\课堂\code\05_react_style> yarn add styled-components
yarn add v1.22.19
warning ..\..\..\..\package.json: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
error styled-components@6.1.1: The engine "node" is incompatible with this module. Expected version ">= 16". Got "12.22.12"
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.
PS D:\04_GitHub\react\资料day01~day30\课堂\code\05_react_style> 

```



![image-20231206095741612](assets\image-20231206095741612.png)



```
yarn add styled-components@5.1.1
```



```
PS D:\04_GitHub\react\资料day01~day30\课堂\code\05_react_style> yarn add styled-components@5.1.1
yarn add v1.22.19
warning ..\..\..\..\package.json: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning " > @testing-library/user-event@7.2.1" has unmet peer dependency "@testing-library/dom@>=5".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning " > styled-components@5.1.1" has unmet peer dependency "react-is@>= 16.8.0".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ styled-components@5.1.1
info All dependencies
└─ styled-components@5.1.1
Done in 25.35s.
PS D:\04_GitHub\react\资料day01~day30\课堂\code\05_react_style> 
```



### 安装 classnames



![image-20231206102810762](assets\image-20231206102810762.png)

```
yarn add classnames@2.2.6
```



```
PS D:\04_GitHub\react\资料day01~day30\课堂\code\06_learn_antdesign> yarn add classnames@2.2.6
yarn add v1.22.19
warning ..\..\..\..\package.json: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning " > @testing-library/user-event@7.2.1" has unmet peer dependency "@testing-library/dom@>=5".
warning "antd > rc-picker@1.10.6" has unmet peer dependency "dayjs@^1.8.18".
warning "craco-less > less-loader@6.2.0" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
[4/4] Building fresh packages...
success Saved 0 new dependencies.
Done in 61.92s.
PS D:\04_GitHub\react\资料day01~day30\课堂\code\06_learn_antdesign> 
```





### 安装 AntDesign





```
yarn add antd@4.4.1
```



```
PS D:\04_GitHub\react\资料day01~day30\课堂\code\06_learn_antdesign>   yarn add antd@4.4.1
yarn add v1.22.19
warning ..\..\..\..\package.json: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning " > @testing-library/user-event@7.2.1" has unmet peer dependency "@testing-library/dom@>=5".
warning "craco-less > less-loader@6.2.0" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning "antd > rc-picker@1.10.6" has unmet peer dependency "dayjs@^1.8.18".
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ antd@4.4.1
info All dependencies
└─ antd@4.4.1
Done in 15.13s.
```



# 第15_16_17课 Redux的使用

### 项目09_learn-redux

```
// 1.导入redux(不能通过ES6的方式)

// import/export 13.2.0开始支持

// commonjs一种实现 -> nodejs
const redux = require('redux');

const initialState = {
  counter: 0
}

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 }
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 }
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num }
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num }
    default:
      return state;
  }
}

// store(创建的时候需要传入一个reducer)
const store = redux.createStore(reducer)

// 订阅store的修改
store.subscribe(() => {
  console.log("counter:", store.getState().counter);
})

// actions
const action1 = { type: "INCREMENT" };
const action2 = { type: "DECREMENT" };

const action3 = { type: "ADD_NUMBER", num: 5 };
const action4 = { type: "SUB_NUMBER", num: 12 };

// 派发action
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);
```

### 运行报错

```
PS D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\09_learn-redux> node .\basic_redux.js
file:///D:/04_GitHub/react/learn-react/learn-react/01_coderwhy/01_react/09_learn-redux/basic_redux.js:6
const redux = require('redux');
              ^

ReferenceError: require is not defined
    at file:///D:/04_GitHub/react/learn-react/learn-react/01_coderwhy/01_react/09_learn-redux/basic_redux.js:6:15
    at ModuleJob.run (internal/modules/esm/module_job.js:145:37)
    at async Loader.import (internal/modules/esm/loader.js:182:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
PS D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\09_learn-redux>
```

### 解决运行错误

>  完美解决 node.js 模块化后报错 ReferenceError: require is not defined
>
> https://blog.csdn.net/qq_38977714/article/details/117252524

```
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
```

### 运行结果

```
PS D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\09_learn-redux> node .\basic_redux.js
counter: 1
counter: 0
counter: -1
counter: 4
counter: -8
PS D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\09_learn-redux>
```







# 01_邂逅React开发
# 02_03_04_JSX核心语法

### 待生成的代码片段

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <div>Header</div>

  <div id="app">dafdasf</div>

  <div>Footer</div>
  
  <!-- 添加React的依赖 -->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <script type="text/babel">
    class App extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          
        }        
      }

      render() {        
        return (
          <div>
            Hello World
          </div>
        )
      }
    }

    ReactDOM.render(<App/>, document.getElementById("app"));
  </script>

</body>
</html>
```

### 生成代码片段

> https://snippet-generator.app
>
> 

### 输入

![image-20240108131017318](D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\assets\image-20240108131017318.png)



![image-20240108130839214](D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\assets\image-20240108130839214.png)

新建一个html.json，然后把在网站生成的代码放入{} 中：

![image-20240108131151580](D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\assets\image-20240108131151580.png)





![image-20240108131044625](D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\assets\image-20240108131044625.png)





### javascript模板

待生成代码片段

```
import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}
```

javascript.json

```
{
	"react pure component": {
	"prefix": "rpc",
	"body": [
		"import React, { PureComponent } from 'react';",
		"",
		"export default class App extends PureComponent {",
		"  render() {",
		"    return (",
		"      <div>",
		"        App",
		"      </div>",
		"    )",
		"  }",
		"}",
		""
	],
	"description": "react pure component"
	}

}
```



# 05_React脚手架

## 源代码

### index.js

```react
import React from 'react';
import ReactDOM from "react-dom";

import App from './App';

ReactDOM.render(<App/>, document.getElementById("root"));
```

### App.js

```react
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello App</h2>
      </div>
    )
  }
}
```

### 安装

```
PS D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\03_hello_react> yarn install
yarn install v1.22.19
warning ..\..\..\..\..\package.json: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning " > @testing-library/user-event@7.2.1" has unmet peer dependency "@testing-library/dom@>=5".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
[4/4] Building fresh packages...
Done in 27.62s.
PS D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\03_hello_react> 
```

### 运行

```
Compiled successfully!

You can now view 03_hello_react in the browser.

  http://localhost:3001

Note that the development build is not optimized.
To create a production build, use yarn build.
```

### 效果截图

 ![image-20240108120221189](D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\assets\image-20240108120221189.png)







# 06_07_08__09_10_React组件化开发
# 11_React的CSS
# 12_AntDesignUI库
# 13_axios的使用
# 14_React过渡动画
# 15_16_17_Redux的使用





```
PS D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\09_learn-redux> node .\basic_redux.js
file:///D:/04_GitHub/react/learn-react/learn-react/01_coderwhy/01_react/09_learn-redux/basic_redux.js:6
const redux = require('redux');
              ^

ReferenceError: require is not defined
    at file:///D:/04_GitHub/react/learn-react/learn-react/01_coderwhy/01_react/09_learn-redux/basic_redux.js:6:15
    at ModuleJob.run (internal/modules/esm/module_job.js:145:37)
    at async Loader.import (internal/modules/esm/loader.js:182:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
PS D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\09_learn-redux>
```







```
10_react-redux_01
```



# 18_19_React-router的使用
# 20_21_22_React-Hooks



### 版本1 10_react-redux_01

#### 项目结构

![image-20240108150406238](D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\assets\image-20240108150406238.png)

#### 运行结果

 ![image-20240108150236990](D:\04_GitHub\react\learn-react\learn-react\01_coderwhy\01_react\assets\image-20240108150236990.png)











# 23_24_网易云项目实战
# 30_React-SSR
# 项目自动化部署

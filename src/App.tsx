import React from 'react';
import logo from './assets/images/logo.svg';
// import './App.css';
import styles from './App.module.css';
import robots from './mockdata/robot.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'


interface Props {}

interface State {
 robotGallery: any[];
 count: number;
}

class App extends React.Component<Props, State> {
  //******生命周期第一阶段，   初始化
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0
    };
    
  }
  //在组件创建好dom元素后，挂载页面时候调用
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({robotGallery: data}));
  }

  //*****生命周期第二阶段：   更新
  //componentWillReceiveProps 功能是当组件props发生改变后，这个函数会被调用
  //即将弃用，会发生匪夷所思的事情， 
  //当一定要使用的时候，可以使用下面的静态函数
  // state getDerivedStateFromProps(nextProps, preState){}

  //判断UI是否应该更新 
  //返回值：  boolean
  // shouldComponentUpdate(nextProps,nextState){
  //   return nextState.some !== this.state.some
  // }

  //组件更新后调用
  componentDidUpdate(){}


  //*****生命周期第三阶段：    销毁
  //组件销毁后调用
  //可以当析构函数使用 destructor来使用
  //可以回收监听或者事件 避免组件销毁时内存泄漏
  componentWillUnmount(){}

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo}/>
          <h1>名字要长名字要长名字要长名字要长名字要长名字要长名字要长名字要长</h1>
        </div>
        <button 
          onClick={()=>{
            //state是异步处理
            //setSate中render函数可以直接访问上一个生命周期的state，  preState。
            //state只要生命周期不发生变化 就不会更新
            this.setState((preState, preProps)=>{return { count: preState.count +1 } }, () => {
              console.log("count", this.state.count);
            });
            this.setState((preState, preProps)=>{return { count: preState.count +1 } }, () => {
              console.log("count", this.state.count);
            });
          }}>
          Click
        </button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map( (r) => (
            <Robot id={r.id} name={r.name} email={r.email}/>
          ))}
        </div>
      </div>
    );
  }
  
}

export default App;

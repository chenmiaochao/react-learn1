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
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0
    };
    
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({robotGallery: data}));
  }

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

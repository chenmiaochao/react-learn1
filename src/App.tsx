import React from 'react';
import logo from './assets/images/logo.svg';
// import './App.css';
import styles from './App.module.css';
import robots from './mockdata/robot.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo}/>
        <h1>名字要长名字要长名字要长名字要长名字要长名字要长名字要长名字要长</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robots.map( r => (
          <Robot id={r.id} name={r.name} email={r.email}/>
        ))}
      </div>
    </div>
  );
}

export default App;

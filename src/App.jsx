import React from 'react';
import './App.css';
import IdCard from './components/idcard.jsx';
import Greetings from './components/greetings.jsx';
import Random from './components/random.jsx';
import BoxColor from './components/boxcolor.jsx';
import LikeButton from './components/likebutton.jsx';
import ClickablePicture from './components/clickablepicture.jsx';
import Dice from './components/dice.jsx';
import CreditCard from './components/creditcard.jsx';
import Rating from './components/rating.jsx';

function App() {
  return (
    <div className="App">
      <h2>IdCard</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h2>Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h2>Random</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>BoxColor</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h2>CreditCard</h2>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />

      <h2>Rating</h2>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h2>LikeButton</h2>
      <div className="LikeButton">
        <LikeButton /> <LikeButton />
      </div>

      <h2>ClickablePicture</h2>
      <div className="LikeButton">
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </div>

      <h2>Dice</h2>
      <Dice />
    </div>
  );
}

export default App;

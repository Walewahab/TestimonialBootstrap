import React from 'react';
import Details from './Details';
import News from './News';
import Login from './Login';
import Signup from './Signup';

const Home = () => {
    return (
        <>
        <div class="container">
  <div class="row">
    <div class="col">
    <p class="h1 mt-5">Amazing</p>
    <p class="h1">Experiences from Our</p>
    <p class="h1">Wonderful Customers</p>
    <p class="mt-4">Amazing Experiences from Our Wonderful Customers Experiences from Our Wonderful Customers Experiences from Our Wonderful Customers</p>
    </div>
    <div class="col mt-2">
    <img src="/images/mars.jpg" alt="" />
    </div>
  </div>
</div>
<News />
        <Details />
        <Login />
        <Signup />
        </>
    )
}

export default Home;

<template>
 <div class="hero">
     <h1>Zero Waste Food Co.</h1>
    <h2>Great Food. Zero Waste</h2>
    <div class="how-it-works">

        <ul>
            <li class="hero-li-text">Order
            </li>
            <li>
                <img title="https://www.freepik.com/ is licensed by creativecommons.org/licenses/by/3.0/" src="../../public/imgs/order-food.png" />
            </li>
        <li class="hero-li-text">Get Food Delivered
        </li>
        <li>
            <img title="https://www.flaticon.com/authors/monkik https://www.flaticon.com/ is licensed by creativecommons.org licenses/by/3.0/ Creative Commons BY 3.0" src="../../public/imgs/meal.png" />
        </li>
        <li class="hero-li-text">Keep the containers. We'll come get them.
        </li>
        <li>
            <img title="https://www.flaticon.com/Smashicons" src="../../public/imgs/bike.png" />
        </li>
    </ul>
    </div>
 </div>
</template>

<script>
  export default {
    name:"Hero",
    items: [
        "contact",
        "About Us"
    ],
    data() {
    return{}
    }
  }
</script>

<style>
    h1, h2{
        text-align: center;
        font-family: 'Roboto', sans-serif;
        color: darkslategrey;
        padding-top: 20px;
    }
    h2{
        font-size: 30px;    
    }
    h1 {
        font-size: 40px;
    }
    .hero{
        background-color: rgba(191,239,255);
    }
    .hero-li-text{
        font-size: 25px;
    }
    .how-it-works {
        background-size:cover;
    }
    .how-it-works ul{
        list-style: none;
    }
    .hero img{
        max-width: 100%;
        width: 300px
    }
    .how-it-works li{
        min-height: 100px;
        padding: 5px 0;
        font-family: 'Roboto', sans-serif;
        font-size: 25px;
        display: inline-flex;
        flex-direction: column;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>

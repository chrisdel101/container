<template>
 <div class="hero">
    <h1>Great Food. Zero Waste</h1>
    <div class="how-it-works">
        <ul>
            <li>Order
                <img title="https://www.freepik.com/ is licensed by creativecommons.org/licenses/by/3.0/" src="../../public/imgs/order-food.png" />
            </li>
        </ul>
        <li>Get Food Delivered
            <img title="https://www.flaticon.com/authors/monkik https://www.flaticon.com/ is licensed by creativecommons.org licenses/by/3.0/ Creative Commons BY 3.0" src="../../public/imgs/meal.png" />
        </li>
        <li>Keep the containers. We'll come get them. 
            <img title="https://www.freepik.com/ is licensed by creativecommons.org licenses/by/3.0/ Creative Commons BY 3.0" src="../../public/imgs/truck.png" />
        </li>
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
    h1{
        text-align: center;
    }

</style>

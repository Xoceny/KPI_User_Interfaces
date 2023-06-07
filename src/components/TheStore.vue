<template>
<!--  <navbar/>-->
    <div class="col-auto px-2 px-lg-2 m-2">
        <h2 class="text-center" style="color: green">Armored vehicles</h2>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class=" col col-md-3 px-1">
                        <img class="img-thumbnail" src="../images/oplot_m.jpg">
                    </div>
                    <div class="col-auto col-md-6 px-2 ">
                        <p class="text">Name: Oplot M</p>
                        <p class="text"> Price: 4M$ </p>
                        <p class="text">Description:Ukrainian tank </p>
                    </div>
                    <div class=" col col-md-3 px-1">
                        <button @click="increase" class="btn-outline-success btn update-cart" data-product=""
                                data-action="add" href="">Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <hr>
            <div class="card-body">
                <div class="row">
                    <div class=" col col-md-3 px-1">
                        <img class="img-thumbnail" src="../images/panther_kf51.jpg">
                    </div>
                    <div class="col-auto col-md-6 px-2 ">
                        <p class="text">Name: Panther KF-51</p>
                        <p class="text"> Price: 15M$ </p>
                        <p class="text">Description:German tank </p>
                    </div>
                    <div class=" col col-md-3 px-1">
                        <button @click="increase" class="btn-outline-success btn update-cart" data-product=""
                                data-action="add" href="">Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <hr>
            <div class="card-body">
                <div class="row">
                    <div class=" col col-md-3 px-1">
                        <img class="img-thumbnail" src="../images/abrams_m1a2.jpg">
                    </div>
                    <div class="col-auto col-md-6 px-2 ">
                        <p class="text">Name: Abrams M1A2</p>
                        <p class="text"> Price: 10M$ </p>
                        <p class="text">Description: America tank </p>
                    </div>
                    <div class=" col col-md-3 px-1">
                        <button @click="increase" class="btn-outline-success btn update-cart" data-product=""
                                data-action="add" href="">Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
import navbar from './navbar.vue'
import store from "@/store/store";
export default {
    name: "TheStore",
    methods: {
      increase(){
         store.state.count++;
         console.log(store.state.count);
      },
    },
}
</script>

<style scoped>

</style>

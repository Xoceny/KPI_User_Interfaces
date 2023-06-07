<template>
    <nav class="navbar bg-gradient navbar-dark navbar-expand-lg bg-body-tertiary " style="background-color: #143EB3 ">
        <div class="container-fluid container px-2 px-lg-3">

            <a class="navbar-brand" style="color: #1a1e21" href="/"><img
                    style="width: 30px; height: 30px ; margin-left:5% ; color: #FFFF00 !important"
                    src="../assets/shop-logo.svg"> Shops</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="   navbar-nav ms-auto mb-3 mb-lg-1 ">

                    <router-link to="/" class="nav-link" style="color: #FFFF00">Home</router-link>
                    <router-link to="cart" class="nav-link" style="color: #FFFF00">Cart</router-link>
                    <router-link to="about" class="nav-link" style="color: #FFFF00">About</router-link>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false" style="color: #FFFF00">
                            Profile
                        </a>
                        <ul class="dropdown-menu" style="background-color: #143EB3">

                            <router-link to="profile" class="dropdown-item" style="color: #FFFF00">Profile</router-link>
                            <router-link to="login" class="dropdown-item" style="color: #FFFF00">Login</router-link>
                            <router-link to="login" class="dropdown-item" style="color: #FFFF00">Exit</router-link>

                        </ul>
                    </li>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar"
}
</script>

<style scoped>

</style>
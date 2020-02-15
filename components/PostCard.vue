<template>
    <a class="card bm--card-equal-height" :href="url">
        <header class="card-header">
            <p class="card-header-title has-text-grey" v-if="title">
                {{title}}
            </p>
        </header>
        
        <div class="card-content">
            <div class="content">
                <figure v-if="feature_image" class="image is-3by2">
                    <img :src="feature_image">
                </figure>          
                <div v-if="content" class="is-clipped has-text-centered">{{content}}</div>
                <div v-else class="is-clipped has-text-centered">Coming Soon</div>
            </div>
        </div>

        <footer class="card-footer">
            <p v-if="Number.isInteger(read_time)" class="card-footer-item">{{read_time}} min</p>
            <p v-else class="card-footer-item">TBA</p>
        </footer>
    </a>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: false
        },
        feature_image:{
            type: String,
            required: false
        },
        read_time:{
            type: Number,
            required: false
        }
    }
}
</script>

<style>
.bm--card-equal-height {
   display: flex;
   flex-direction: column;
   height: 100%;
}
.bm--card-equal-height .card-footer {
   margin-top: auto;
}
.card {
  border-radius: 25px;
}
.card-footer{
  border-radius: 0px 0px 25px 25px;
}
.card-header{
  border-radius: 25px 25px 0px 0px;
}
</style>
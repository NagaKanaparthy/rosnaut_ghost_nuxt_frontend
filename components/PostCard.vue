<template>
  <a class="card bm--card-equal-height" href="#">
    <header class="card-header">
        <div class="card-header-title has-text-grey" v-if="title">
            {{title}}
        </div>
    </header>
      
    <div class="card-content">
        <div class="content">
            <b-icon v-if="feature_image"
                :icon="feature_image"
                size="is-medium"
                type="is-primary"
            />
            <b-icon v-else
                icon="github-circle"
                size="is-medium"
                type="is-primary"
            />            
            <div v-if="content" class="is-clipped">{{content}}</div>
        </div>
    </div>

    <footer class="card-footer">
        <a href="#" class="card-footer-item">{{read_time}} min</a>
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
        content:{
            type: String,
            required: true
        },
        feature_image:{
            type: String,
            required: false
        },
        read_time:{
            type: String,
            required: true
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
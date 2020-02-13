<template>
  <section class="section">
    <div class="columns is-desktop">
      <div v-for="post in posts" track-by="index" class="column is-4">
        <h1 v-if="post.index!=-1">{{post.index}}</h1>
        <PostCard
          :title="post.title"
          :content="post.excerpt"
          :feature_image="post.feature_image"
          :read_time="post.reading_time"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PostCard from "~/components/PostCard"
import {getPosts} from "~/middleware/ghost"
export default {
  name: 'HomePage',

  components: {
    PostCard
  },
  async asyncData(){
    const posts = await getPosts();
    console.info(posts);
    return {posts: posts}
  }
}
</script>

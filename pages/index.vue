<template>
  <section class="section">
    <div class="columns is-desktop">
      <div v-for="post in posts" track-by="index" class="column">
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
  layout: "space",
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

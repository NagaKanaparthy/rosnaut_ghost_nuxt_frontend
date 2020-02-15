<template>
  <section class="columns is-desktop">
    <section class="column">
        <div v-for="post in top" class="column">
          <PostCard
              :title="post.title"
              :url="post.url"
              :content="post.excerpt"
              :feature_image="post.feature_image"
              :read_time="post.reading_time"
            />
        </div>
    </section>
    <section class="column">
        <div v-for="post in bot" class="column">
          <PostCard
              :title="post.title"
              :url="post.url"
              :content="post.excerpt"
              :feature_image="post.feature_image"
              :read_time="post.reading_time"
            />
        </div>
    </section>
  </section>
</template>

<script>
import PostCard from "~/components/PostCard"
import {getPosts, getSettings} from "~/middleware/ghost"
export default {
  name: 'HomePage',
  layout: "space",
  components: {
    PostCard
  },
  async asyncData(){
    const settings = await getSettings();
    const posts = await getPosts();
    const tops = posts.slice(0,3);
    let bots = null;
    if(posts.length > 3){
      bots = posts.slice(3,posts.length);
    }
    console.info(settings,tops,bots);
    return {posts: posts,top: tops, bot: bots}
  }
}
</script>

import GhostContentAPI from "@tryghost/content-api";
import config from "@/plugins/ghostAPIKey";

const api = new GhostContentAPI({
  url: config.url,
  key: config.key,
  version: "v3"
});

export function setAPIKey(key) {
  api.key = key;
}

export function setAPIUrl(uri) {
  api.url = uri;
}

export async function getPosts() {
  return await api.posts
    .browse({
      include: "tags.authors",
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getPages() {
  return await api.getPages.browse({ limit: "all" }).catch(err => {
    console.error(err);
  });
}

export async function getSinglePostById(id) {
  return await api.posts.read({ id: id }).catch(err => {
    console.error(err);
  });
}

export async function getSinglePostBySlug(slug) {
  return await api.posts.read({ slug: slug }).catch(err => {
    console.error(err);
  });
}

export async function getAuthor(authorSlug) {
  return await api.authors.read({ slug: authorSlug }).catch(err => {
    console.error(err);
  });
}

export async function getSettings() {
  return await api.settings.browse().catch(err => {
    console.error(err);
  });
}

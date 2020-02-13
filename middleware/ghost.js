import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: "http://35.245.226.56",
    key: "d75815b409d391a602c47e26c3",
    version: "v3"
});

export async function getPosts(){
    return await api.posts
        .browse({
            include: "tags.authors",
            limit:"6"
        })
        .catch(err=> {console.error(err);});
}

export async function getPages(){
    return await api.getPages
        .browse({limit:"all"})
        .catch(err => {console.error(err);});
}

export async function getSinglePost(postSlug){
    return await api.posts
        .read({slug: postSlug})
        .catch(err => {console.error(err);});
}

export async function getAuthor(authorSlug){
    return await api.authors
        .read({slug: authorSlug})
        .catch(err => {console.error(err);});
}
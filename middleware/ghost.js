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
            limit:"all"
        })
        .catch(err=> {console.error(err);});
}

export async function getPages(){
    return await api.getPages
        .browse({limit:"all"})
        .catch(err => {console.error(err);});
}

export async function getSinglePostById(id){
    return await api.posts
        .read({id: id})
        .catch(err => {console.error(err);});
}

export async function getSinglePostBySlug(slug){
    return await api.posts
        .read({slug: slug})
        .catch(err => {console.error(err);});
}

export async function getAuthor(authorSlug){
    return await api.authors
        .read({slug: authorSlug})
        .catch(err => {console.error(err);});
}

export async function getSettings(){
    return await api.settings
        .browse()
        .catch(err=> {console.error(err);});
}
export interface Hopital {
    hopital_id: number,
    hopital_name: string
}

export interface Post{
    author: string,
    profile_picture: string,
    post_description: string,
    hopital_id: number,
    like_count: number,
    comment_count: number,
    post_picture: string,
    post_picture_alt?: string,
}

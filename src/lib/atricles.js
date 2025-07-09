import supabase from './supabase.js';


export const createArticle = async (article) => {
    console.log("Creating articles with data:", article);

    const articleData = {
        title: article.title,
        content: article.content,
        tags: article.tags,
        author_id: article.author_id,
        published: article.published || false,
        featured_image: article.featuredImageUrl || null,
    }


    // insert to supabase

    const { data, error } = await supabase
        .from('articles')
        .insert(articleData)
        .select()
        .single()
    if (error) {
        console.error("Error creating article:", error);
        throw error;
    }
    console.log("Article created successfully:", data);
    return data;
}
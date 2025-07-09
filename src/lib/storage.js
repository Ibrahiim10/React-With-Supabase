import { v4 as uuidv4 } from 'uuid';
import supabase from './supabase.js';

export const uploadImage = async (file, userId, bucket = 'featured-image') => {


    try {

        // file extension
        const fileExt = file.name.split('.').pop().toLowerCase();

        // create unique path file name 
        const filename = `${uuidv4()}.${fileExt}`;
        const filePath = `${userId}/${filename}`;

        // Upload the file to Supabase storage
        const { data, error } = await supabase.storage
            .from(bucket)
            .upload(filePath, file, {
                contentType: file.type,
                cacheControl: '3600',
                upsert: true,
            });

            if (error) {
                console.error("Error uploading image:", error);
                throw error;
            }

            // Get the public URL of the uploaded file
            const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(filePath);

            return {
                path: filePath,
                url: urlData.publicUrl,
            }
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
}
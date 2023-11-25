const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPERITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPERITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPERITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPERITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPERITE_BUCKET_ID)
}

export default conf
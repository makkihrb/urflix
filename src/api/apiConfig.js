const apiKey = 'bb9f74affb49b3d92574298dccf8e0c4'; 

const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: apiKey,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;

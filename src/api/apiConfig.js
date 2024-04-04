const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'process.env.API_KEY', // <= YOUR TMDB API KEY HERE
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;

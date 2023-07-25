const key = '2e80ca3267abc9833a49f75b7434f5a4'


const request = {
    requestPopular: `https://themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&=page=1`,
    requestTrending: `https://themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&=page=2`,
    requestUpcoming: `https://themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&=page=1`,
    requestHorror: `https://themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_ad`,
}
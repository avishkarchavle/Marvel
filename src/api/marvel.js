import axios from 'axios';
import md5 from 'md5';

const publicKey = '5bb1d0569eecf9fd8f68f957bfeb8662';
const privateKey = '83927a4d5182b21a3b5998f875cb6a69eda864ae';
const baseUrl = 'https://gateway.marvel.com/v1/public';

const generateHash = () => {
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey);
    return { ts, hash };
};



export const getMarvelCreators = async () => {
    const { ts, hash } = generateHash();
    try {
        const response = await axios.get(`${baseUrl}/creators`, {
            params: {
                ts,
                apikey: publicKey,
                hash,
            },
        });
        return response.data.data.results;
    } catch (error) {
        console.error('Error fetching Marvel creators:', error);
        return [];
    }
};

export const getMarvelEvents = async () => {
    const { ts, hash } = generateHash();
    try {
        const response = await axios.get(`${baseUrl}/events`, {
            params: {
                ts,
                apikey: publicKey,
                hash,
            },
        });
        return response.data.data.results;
    } catch (error) {
        console.error('Error fetching Marvel events:', error);
        return [];
    }
};

export const getMarvelSeries = async () => {
    const { ts, hash } = generateHash();
    try {
        const response = await axios.get(`${baseUrl}/series`, {
            params: {
                ts,
                apikey: publicKey,
                hash,
            },
        });
        return response.data.data.results;
    } catch (error) {
        console.error('Error fetching Marvel series:', error);
        return [];
    }
};

export const getMarvelStories = async () => {
    const { ts, hash } = generateHash();
    try {
        const response = await axios.get(`${baseUrl}/stories`, {
            params: {
                ts,
                apikey: publicKey,
                hash,
            },
        });
        return response.data.data.results;
    } catch (error) {
        console.error('Error fetching Marvel stories:', error);
        return [];
    }
};


export const getMarvelHeroes = async () => {
    const { ts, hash } = generateHash(); // Define ts and hash here
    const heroNames = ['Iron Man', 'Thor', 'Captain America', 'Hulk', 'Black Widow', 'Hawkeye', 'Spider-Man', 'Thanos'];
    const heroes = await Promise.all(heroNames.map(async name => {
        try {
            const response = await axios.get(`${baseUrl}/characters`, {
                params: {
                    ts,
                    apikey: publicKey,
                    hash,
                    name,
                },
            });
            return response.data.data.results[0];
        } catch (error) {
            console.error(`Error fetching data for hero: ${name}`, error);
            return null;
        }
    }));
    return heroes.filter(hero => hero !== null);
};


export const getAllCharacters = async () => {
    const { ts, hash } = generateHash();
    let allCharacters = [];
    let offset = 0;
    let limit = 100; // Maximum allowed by Marvel API
    let total = 0;

    do {
        try {
            const response = await axios.get(`${baseUrl}/characters`, {
                params: {
                    ts,
                    apikey: publicKey,
                    hash,
                    offset,
                    limit,
                },
            });
            allCharacters = allCharacters.concat(response.data.data.results);
            total = response.data.data.total;
            offset += limit;
        } catch (error) {
            console.error('Error fetching characters:', error);
            break;
        }
    } while (offset < total);

    return allCharacters;
};

export const getMarvelComics = async () => {
    const { ts, hash } = generateHash();
    try {
        const response = await axios.get(`${baseUrl}/comics`, {
            params: {
                ts,
                apikey: publicKey,
                hash,
            },
        });
        return response.data.data.results;
    } catch (error) {
        console.error('Error fetching Marvel comics:', error);
        return [];
    }
};

export default {
    getMarvelCreators,
    getMarvelEvents,
    getMarvelSeries,
    getMarvelStories,
    getMarvelHeroes,
    getAllCharacters,
    getMarvelComics,
};

import axios from 'axios';

const AVAILABLE_REGIONS = [
    'br',
    'ap',
    'eu',
    'kr',
    'na',
    'latam'
];

async function getRank(region) {
    if (!AVAILABLE_REGIONS.includes(region)) {
        throw new Error('Region not supported');
    }
    const apiKey = 'RGAPI-3f00f799-b3f7-4db7-a771-37adc4c55221';
    const act = '3e47230a-463c-a301-eb7d-67bb60357d4f';

    return axios.get(`https://${region}.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${act}`, {
        params: {
            api_key: apiKey
        }
    })
    .then(({ data }) => data['players'])
}

export default getRank;
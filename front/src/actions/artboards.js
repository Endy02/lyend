import axios from 'axios';

import {GET_ARTBOARDS} from './types';

export const getArtboards = () => dispatch => {
    axios.get('/api/artboards/')
        .then(res => {
            dispatch({
                type: GET_ARTBOARDS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
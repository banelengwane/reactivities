import axios, { AxiosResponse } from 'axios';
import { Activity } from '../models/activity';

axios.defaults.baseURL = 'http://localhost:5000/api';

const reponseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(reponseBody),
    post: <T> (url: string, body: object) => axios.post<T>(url, body).then(reponseBody),
    put: <T> (url: string, body: object) => axios.put<T>(url, body).then(reponseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(reponseBody)
}

const Activities = {
    list: () => requests.get<Activity[]>('/activities')
}

const agent = {
    Activities
}

export default agent;
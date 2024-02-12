import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? 'http://3.81.254.132:3200' : 'http://3.81.254.132:3200'; //'http://localhost:3200';

export const socket = io(URL);
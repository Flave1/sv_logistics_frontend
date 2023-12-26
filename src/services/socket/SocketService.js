import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? 'http://44.202.240.52:3200' : 'http://localhost:3200';

export const socket = io(URL);
// ?? - se a variavel REACT_APP_BACKEND_URL não estiver definida, usa o valor fixado
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';
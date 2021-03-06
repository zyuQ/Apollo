import axios from "axios";
import router from "../../router";
// import { Message } from 'element-ui';

// import {getAesString, getDAesString} from '../cryptoJs';

axios.defaults.timeout = 300000;
// axios.defaults.baseURL = process.env.NODE_ENV === "production" ? "/api" : "";
axios.defaults.baseURL = 'http://localhost:8700';
// axios.defaults.baseURL = 'http://127.0.0.1:7001';

axios.interceptors.response.use(
    res => {
        const result = res.data;
        if (result.resCode != -2) {
            return result;
        } else {
			// Message.error('登录超时');
            localStorage.removeItem("token");
            setTimeout(() => {
                router.push({ path: "login" });
            }, 1000);
        }
    },
    err => {
        setTimeout(() => {
            window.location.href="/login";
        },1000);
    }
);

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        config.data = JSON.stringify(config.data);

        if (token) {
            config.headers = {
                Authorization: `Bearer ${token}`
            };
        }
        if (config.method === "post") {
            if (config.url.indexOf("up.qiniu.com") >= 0) {
                config.headers["Content-Type"] = "multipart/form-data";
                Reflect.deleteProperty(config.headers, "Authorization");
            } else {
                config.headers["Content-Type"] = "application/json";
            }
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

export const get = (url, params = {}, options) => {
    return new Promise((resolve, reject) => {
        axios
            .get(
                url,
                {
                    params
                },
                {
                    ...options
                }
            )
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    });
};

export const post = (url, data = {}) => {
	// var params = getAesString(data);
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            response => {
                resolve(response);
            },
            err => {
                reject(err);
            }
        );
    });
};
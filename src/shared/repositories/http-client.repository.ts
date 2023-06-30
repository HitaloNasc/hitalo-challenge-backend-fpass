// src/shared/repositories/http-client.repository.ts

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpClientRepository {
    private readonly axiosInstance: AxiosInstance;

    constructor(baseUrl: string) {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
        });
    }

    async get<T>(url: string): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.get(url);
            return response.data;
        } catch (error) {
            console.log(error);

            throw new Error('Failed to make GET request');
        }
    }
}

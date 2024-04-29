import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://jsvegycd:RK0NvusEyuLjtzh6DMefhSdsTwwMFHwt@fanny.db.elephantsql.com/jsvegycd");
    await client.connect();
    return client;
}
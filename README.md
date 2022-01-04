# nodejs-redis-connection

Making redis connection on Node.js

- By default, redis.createClient() will use 127.0.0.1 and 6379 as the hostname and port respectively. If you have a different host/port, you can supply them like so:
    ```sh 
        const client = redis.createClient({
        host: '<hostname>',
        port: <port>,
        password: '<password>'
        });
       

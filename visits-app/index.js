const express = require('express');
const redis = require('redis');

const app = express();
//host is the container service name to connect to other container.
const client = redis.createClient(
{
	host: 'redis-server',
	port: 6379
}
);
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8181, () => {
  console.log('listening on port 8181');
});
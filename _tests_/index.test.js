const redis = require('redis');
const cacheql = require('../cacheql');
const {auth, set, checkify, cachify} = require('../cacheql')

//set
test('it should log into redis successfully', () => {
    const testData = {
        redisHost: "redis-10212.c52.us-east-1-4.ec2.cloud.redislabs.com",
        redisPort: 10212,
        redisAuth: "eRQFVq70CXuDEoISTvKNVFtdevWabNbe",
        timeToLive: 300
      };
      console.log('cacheql', cacheql)
    expect(cacheql.set(testData)).toBe(true)
})

test('it should log into redis unsuccessfully', () => {
    const testData = {
        redisHost: null,
        redisPort: null,
        redisAuth: null,
        timeToLive: null
      };
      console.log('cacheql', cacheql)
    expect(cacheql.set(testData)).toBe(undefined)
})

//checkify
test('it should successfully return from the cache', () => {

})
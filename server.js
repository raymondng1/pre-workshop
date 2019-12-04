const express = require('express');
const app = express();
const path = require('path')

const people = [];
app.use('/dist', express.static(path.join(__dirname,'dist')));
app.get('/', (req,res,next) => res.sendFile(path.join(__dirname, 'index.html')))

app.get('/api/people', (req,res, next) => res.send(people)); 
app.post('/api/people', (req,res,next) => {
    const person = {id: Math.random(), name: `Person ${Math.random()}`}
    people.push(person)
    res.send(person)
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))
const express = require('express');
const app = express();

app.use(express.json());

app.get('/mean/:nums', (req, res) => {
	let nums = req.params.nums.split(',');
	nums = nums.map(n => parseInt(n));
	let sum = nums.reduce((sum, num) => {
		return sum + num;
	}, 0);
	let mean = sum / nums.length;
	return res.send(`${mean}`);
})

app.get('/median', (req, res) => {
	return '';
})

app.get('/mode', (req, res) => {
	return '';
})

app.listen(3000, () => {
	console.log('app running on port 3000');
});
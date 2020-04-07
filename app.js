const express = require('express');
const app = express();

app.use(express.json());

app.get('/mean/:nums', (req, res) => {
	let nums = getArrayOfNums(req.params.nums,',');
	let sum = nums.reduce((sum, num) => { return sum + num }, 0);
	let mean = sum / nums.length;
	return res.send(`${mean}`);
})

app.get('/median/:nums', (req, res) => {
	const nums = getArrayOfNums(req.params.nums,',');
	return res.send(`${median(nums)}`);
})

app.get('/mode/:nums', (req, res) => {
	const nums = getArrayOfNums(req.params.nums,',');
	return res.send(`${mode(nums)}`);
})

const getArrayOfNums = (strNums,delimiter) => {
	let numsArr = strNums.split(delimiter);
	return numsArr.map(n => parseInt(n));
}

const median = arr => {
	const mid = Math.floor(arr.length/2);
	const nums = arr.sort((a,b)=>a-b);
	return arr.length % 2 !== 0 ? nums[mid] : (nums[mid-1]+nums[mid]/2);
};

const mode = arr => {
	// mode: number that occurs the most often.
	// should be able to return multiple values
	return null;
};

app.listen(3000, () => {
	console.log('app running on port 3000');
});
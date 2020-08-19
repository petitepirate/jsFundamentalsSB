// Given two strings, write a function called validAnagram, which determines
// if the second string is an anagram of the first
// An anagram is a word, phrase, or name formed by rearranging the letters of
//another, such as cinema, formed from iceman.

//my solution
function makeFreqCounter(str) {
	const freqCounter = {};
	for (let char of str) {
		freqCounter[char] = freqCounter[char] + 1 || 1;
	}
	return freqCounter;
}

function validAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;
	const str1Freq = makeFreqCounter(str1);
	const str2Freq = makeFreqCounter(str2);
	for (let key in str1Freq) {
		if (str2Freq[key] !== str1Freq[key]) return false;
	}
	return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));

//---------------------------------------------------------------------
//Not using a Frequency counter and inefficient:
function validAnagram2(str1, str2) {
	return str1.split('').sort().join('') === str2.split('').sort().join('');
}

//---------------------------------------------------------------------
//Using MAP // colts solution
function makeFreqCounter3(str) {
	let frequencies = new Map();
	for (let val of str) {
		let valCount = frequencies.get(val) || 0;
		frequencies.set(val, valCount + 1);
	}
	return frequencies;
}

function validAnagram3(str1, str2) {
	if (str1.length !== str2.length) return false;
	const str1Freq = makeFreqCounter3(str1);
	const str2Freq = makeFreqCounter3(str2);
	if (str1Freq.size !== str2Freq.size) return false;
	for (let letter of str1Freq.keys()) {
		if (str2Freq.get(letter) !== str2Freq.get(letter)) return false;
	}
	return true;
}

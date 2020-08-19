// Given two strings, write a function called validAnagram, which determines
// if the second string is an anagram of the first
// An anagram is a word, phrase, or name formed by rearranging the letters of
//another, such as cinema, formed from iceman.

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

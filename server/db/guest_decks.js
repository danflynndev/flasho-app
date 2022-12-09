module.exports = 
{
    "decks": [
        {
            "title": "array methods",
            "desc": "methods on javascript array prototype",
            "cards": [
                {
                    "_id": 0,
                    "title": "at()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Zero based index of the element to be returned. Negative index counts back from end of the array"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "The element in the array matching the given index, or undefined"
                        }
                    ]
                },{
                    "_id": 1,
                    "title": "concat()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Arrays and/or values to concatenate into new array."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new array with arguments added to the calling array. Returns shallow copy of array if parameters are omitted."
                        }

                    ]
                },{
                    "_id": 2,
                    "title": "entries()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Return value",
                            "a": "A new Array Iterator object with key/value pairs for each index"
                        }
                    ]
                },{
                    "_id": 3,
                    "title": "every()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Callback function to execute for each element in the array. It should return a truthy to indicate th element passes the test and falsy otherwise."
                        },{
                            "_id": 1,
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "True if callback returns truthy for every array element. Otherwise, false."
                        }
                    ]
                },{
                    "_id": 4,
                    "title": "fill()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Value to fill array with, followed by optional start and end indexes"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "The modified array, filled with provided value"
                        },{
                            "_id": 2,
                            "q": "Caveats",
                            "a": "If value arg is an object, each slot in the array will reference that object"
                        }
                    ]
                },{
                    "_id": 5,
                    "title": "filter()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return truthy to keep the element, and falsy otherwise."
                        },{
                            "_id": 1,
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "A shallow copy of a portion of the given array, filtered down to just the elements that pass the callback function."
                        }
                    ]
                },{
                    "_id": 6,
                    "title": "find()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return truthy to indicate the matching element has been found"
                        },{
                            "_id": 1,
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "First array element that satisfies the provided function. Otherwise, undefined is returned."
                        }
                    ]
                },{
                    "_id": 7,
                    "title": "findIndex()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return truthy to indicate a matching element is found"
                        },{
                            "_id": 1,
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "Index of the first element that passes the test. Otherwise -1."
                        }
                    ]
                },{
                    "_id": 8,
                    "title": "findLast()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return truthy to indicate a matching element is found"
                        },{
                            "_id": 1,
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "Value of array element with the highest index value that satisfies the provided function. Undefined if no match found"
                        }
                    ]
                },{
                    "_id": 9,
                    "title": "findLastIndex()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return truthy to indicate a matching element is found"
                        },{
                            "_id": 1,
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "The index of the last element in the array that passes the test. -1 if no match found"
                        }
                    ]
                },{
                    "_id": 10,
                    "title": "flat()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "depth - optional. Specifies how deep a nested array structure should be flattened. Default is 1."
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "A new array with the sub-array elements concatenated into it"
                        }
                    ]
                },{
                    "_id": 11,
                    "title": "flatMap()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return an array containing new elements of the new array"
                        },{
                            "_id": 1,
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "A new array with each element being the result of the callback function and flattened by a depth of 1"
                        }
                    ]
                },{
                    "_id": 12,
                    "title": "forEach()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Its return value is discarded"
                        },{
                            "_id": 1,
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "Undefined"
                        }
                    ]
                },{
                    "_id": 13,
                    "title": "includes()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "searchElement - the value to search for. fromIndex - optional, index at which to start searching."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "True if the value searchElement is found within the array. False otherwise"
                        }
                    ]
                },{
                    "_id": 14,
                    "title": "indexOf()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "searchElement - element to locate in the array. fromIndex - optional, index at which to start searching."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "The first index of the element in the array. -1 if not found"
                        }
                    ]
                },{
                    "_id": 15,
                    "title": "join()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "separator - optional. Specifies a string to sepearate each pair of adjacent elements. If omitted, array elements are separated with a comma."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A string with all array elements joined."
                        }
                    ]
                },{
                    "_id": 16,
                    "title": "keys()",
                    "qas": [
                        {
                          "_id": 0,
                            "q": "Parameters",
                            "a": "none",
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new Array iterator object of the arrays keys", 
                        }
                    ]
                },{
                    "_id": 17,
                    "title": "lastIndexOf()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "searchElement - element to locate in the array. fromIndex - optional, index at which to start searching."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "Last index of the element in the array. -1 if not found"
                        }
                    ]
                },{
                    "_id": 18,
                    "title": "map()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Its return value is added as a single element in the new array."
                        },{
                            "_id": 1,
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "A new array with each element being the result of the callback function."
                        }
                    ]
                },{
                    "_id": 19,
                    "title": "of()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "elementN - Elements used to create the array"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new Array instance"
                        }
                    ]
                },{
                    "_id": 20,
                    "title": "pop()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "The last element of the array. Mutates array, removing that element."
                        }
                    ]
                },{
                    "_id": 21,
                    "title": "push()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "The element(s) to add to the end of the array"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "The new length property of the object upon which the method was called"
                        }
                    ]
                },{
                    "_id": 22,
                    "title": "reduce()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameter",
                            "a": "Callback function to execute for each element. Return value becomes the value of 'accumulator' parameter on the next invocation."
                        },{
                            "_id": 1,
                            "q": "Optional parameter",
                            "a": "initialValue - value to which 'accumulator' is initialized for the first callback."
                        },{
                            "_id": 2,
                            "q": "Callback Parameters",
                            "a": "accumulator, currentValue, currentIndex, array"
                        },{
                            "_id": 3,
                            "q": "Return value",
                            "a": "The value that results from running the callback function to completion over the entire array"
                        }
                    ]
                },{
                    "_id": 23,
                    "title": "reverse()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "The reference to the original array, now reversed. No copy is made."
                        }
                    ]
                },{
                    "_id": 24,
                    "title": "shift()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "The first element of the array, now removed, mutating the original array."
                        }
                    ]
                },{
                    "_id": 25,
                    "title": "slice()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Optional start and end index. Extracts up to but not including end."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new array containing the extracted elements"
                        }
                    ]
                },{
                    "_id": 26,
                    "title": "some()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Callback function to execute for each array element. Should return truthy to indicate the element passes the test and falsy otherwise."
                        },{
                            "_id": 1,
                            "q": "Callback Parameters",
                            "a": "element, index, array"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "True if the callback returns truthy for at least one element. Otherwise false."
                        }
                    ]
                },{
                    "_id": 27,
                    "title": "sort()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Optional compare function to define the sort order. If omitted, elements are converted to strings, then sorted to each characters code point value"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "The reference to the original array, now sorted. No copy is made"
                        }
                    ]
                },{
                    "_id": 28,
                    "title": "splice()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameter",
                            "a": "Index at which to start changing the array. Default is 0"
                        },{
                            "_id": 1,
                            "q": "Optional Parameter 1",
                            "a": "deleteCount - integer indicating number of elements to remove, beginning at start param"
                        },{
                            "_id": 2,
                            "q": "Optional Parameter 2",
                            "a": "itemN - Elements to add to the array, beginning from start param"
                        },{
                            "_id": 3,
                            "q": "Return value",
                            "a": "An array containing the deleted elements. Mutates the original"
                        }
                    ]
                },{
                    "_id": 29,
                    "title": "toLocaleString()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Optional language tag string or array of such. Optional options object with configuration properties"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A string of the array elements concatenated and separated by a local-specific String, such as a comma."
                        }
                    ]
                },{
                    "_id": 30,
                    "title": "toString()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A string representing the specified array, concatenated and comma separated."
                        }
                    ]
                },{
                    "_id": 31,
                    "title": "unshift()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "elementN - the elements to add to the front of the array"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "The new length property of the calling object"
                        }
                    ]
                },{
                    "_id": 32,
                    "title": "values()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new iterable iterator object of the array values"
                        }
                    ]
                }
            ]
        },{
            "title": "String Methods",
            "desc": "Methods available on the JavaScript string prototype",
            "cards": [
                {
                    "_id": 0,
                    "title": "at()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Index of the string character to be returned. Negative numbers start at end of string"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A string containing a single UTF-16 code unit located at the index. Undefined for invalid indexes"
                        },
                    ]
                },{
                    "_id": 1,
                    "title": "charAt()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "An integer between 0 and str.length - 1. Default is 0."
                        },{
                            "_id": 1,
                            "q":"Return value",
                            "a":"A String representing the character at given index. An empty string if index is out of range."
                        }
                    ]
                },{
                    "_id": 2,
                    "title": "charCodeAt()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "An integer between 0 and str.length - 1. Default is 0."
                        },{
                            "_id": 1,
                            "q":"Return value",
                            "a":"A Number representing the UTF-16 code unit value of the character at given index. NaN if index is out of range."
                        }
                    ]
                },{
                    "_id":3,
                    "title": "codePointAt()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "Index position of an element in string to return the code point value from."
                        },{
                            "_id":1,
                            "q":"Return value",
                            "a": "A decimal number representing the code point value of the character. Undefined if there is no element"
                        },{
                            "_id":2,
                            "q": "Caveats",
                            "a": "Make sure to iterate with for...of or forEach() as they correctly iterate UTF-16 surrogates"
                        }
                    ]
                },{
                    "_id": 4,
                    "title": "concat()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "One or more strings to concatenate to the calling string object."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new string containing the combined text of the strings provided"
                        }
                    ]
                },{
                    "_id": 5,
                    "title": "endsWith()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameter",
                            "a": "The characters to be searched for at the end of string. Cannot be a regex End position at which search string is expected to be found. Defaults to str.length"
                        },{
                            "_id": 1,
                            "q": "Optional parameter",
                            "a": "End position at which search string is expected to be found. Defaults to str.length"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "True if given characters are found, otherwise False."
                        }
                    ]
                },{
                    "_id": 6,
                    "title": "includes()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameter",
                            "a": "A sring to be searched for within the calling string object. Cannot be regex"
                        },{
                            "_id": 1,
                            "q": "Optional parameter",
                            "a": "Number position at which to begin searching. Defaults to 0"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "True if string is found anywhere within the given string; otherwise, false"
                        }
                    ]
                },{
                    "_id": 7,
                    "title": "lastIndexOf()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameter",
                            "a": "Substring to search for, coerced to a string"
                        },{
                            "_id": 1,
                            "q": "Optional parameter",
                            "a": "Number indicating the position at which to stop searching for the substring"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "The index at which the last occurence of the substring begins. -1 if not found"
                        }
                    ]
                },{
                    "_id": 8,
                    "title": "localCompare()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameter",
                            "a": "compareString - the string against which the referenceStr is compared"
                        },{
                            "_id": 1,
                            "q": "Optional parameters",
                            "a": "Locales string, and options object. Correspond to params of the Intl.Collator() constructor"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "Negative number if referenceStr occurs before compareString; positive if referenceStr occurs after compareString; 0 if they are equivalent."
                        }
                    ]
                },{
                    "_id": 9,
                    "title": "match()",
                    "qas": [
                        {
                            "_id":0,
                            "q": "Parameters",
                            "a": "A regular expession objet or object that has a Symbol.match method"
                        },{
                            "_id":1,
                            "q": "Return value",
                            "a": "Array of all matches if 'g' flag is used. First match and capturing groups if no flag. Null if no matches found."
                        }
                    ]
                },{
                    "_id":10,
                    "title": "matchAll()",
                    "qas": [
                        {
                            "_id":0,
                            "q": "Parameters",
                            "a": "A regular expession object or object that has a Symbol.matchAll method."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "An iterable iterator of matches. Each match is an array with the same shape as return value of RegExp.prototype.exec()"
                        },{
                            "_id": 2,
                            "q": "Caveats",
                            "a": "If param is a regex, then it must have the global 'g' flag set or a TypeError is thrown"
                        }
                    ]
                },{
                    "_id":11,
                    "title": "padEnd()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "targetLength - the length of the resulting string once the current str has been padded."
                        },{
                            "_id": 1,
                            "q": "Optional param",
                            "a": "padString - The string to pad current str with. Truncated to stay within targetLength. Default is U+0020 or space."
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "A String of specified targetLength with the padString applied at the end of current str."
                        }
                    ]
                },{
                    "_id": 12,
                    "title": "padStart()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "targetLength - the length of the resulting string once the current str has been padded."
                        },{
                            "_id": 1,
                            "q": "Optional param",
                            "a": "padString - The string to pad current str with. Truncated to stay within targetLength. Default is U+0020 or space."
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "A String of specified targetLength with the padString applied from the start."
                        }
                    ]
                },{
                    "_id": 13,
                    "title": "repeat()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "count - an integer between 0 and +Infinity. Number of times to repeat the string."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new string containing the specifiecnumber of copies of the given string."
                        }
                    ]
                },{
                    "_id": 14,
                    "title": "replace()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameter 1",
                            "a": "pattern - a string or object with a Symbol.replace method, typically a regular expression. Otherwise coerced to a string."
                        },{
                            "_id": 1,
                            "q": "Parameter 2",
                            "a": "replacement - if string, replaces substring matched by pattern. If function, invoked for every match and its return value used as the replacement text"
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "A new string, with one, some, or all matches of the pattern replaced based on the argument."
                        }
                    ]
                },{
                    "_id": 15,
                    "title": "replaceAll()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameter 1",
                            "a": "pattern - a string or object with Symbol.replace method, typically a regular expression. If a regex, must have global 'g' flag set, or TypeError is thrown"
                        },{
                            "_id": 1,
                            "q": "Parameter 2",
                            "a": "replacement - String or function. Same semantics as that of String.prototype.replace()"
                        },{
                            "_id": 3,
                            "q": "Return value",
                            "a": "A new string, with all matches of a pattern replaced by a replacement"
                        }
                    ]
                },{
                    "_id": 16,
                    "title": "search()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "A regular expression object, or any object with a Symbol.search method."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "Index of first match between the regex and the given string. -1 if no match found."
                        }
                    ]
                },{
                    "_id": 17,
                    "title": "slice()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "indexStart - first character to include. indexEnd - optional. first character to exclude"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new string containing the extracted section of the string"
                        }
                    ]
                },{
                    "_id": 18,
                    "title": "split()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameter 1",
                            "a": "separator - optional. Pattern describing where each split should occur. If undefined, string is returned wrapped in an array."
                        },{
                            "_id": 1,
                            "q": "Parameter 2",
                            "a": "limit - optional. Non-negative integer specifiying limit on number of substrings to include in the array."
                        },{
                            "_id": 2,
                            "q": "Return value",
                            "a": "Array of strings, split at each point where separator occurs in the given string."
                        }
                    ]
                },{
                    "_id": 19,
                    "title": "startsWith()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "searchString - Characters to be searched at start of this string. position - optional. Start position at which searchString is expected to be found. Default 0."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "True if given characters are found; otherwise, false."
                        }
                    ]
                },{
                    "_id": 20,
                    "title": "substring()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "indexStart - first character to include. indexEnd - optional. First character to exclude."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new string containing the specified part of the given string"
                        }
                    ]
                },{
                    "_id": 21,
                    "title": "toLocaleLowerCase()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "locales - optional. String with BCP 47 language tag, or array of such."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new string representing the calling string convert to lower case according to locale-specific case mappings."
                        }
                    ]
                },{
                     "_id": 22,
                     "title": "toLocaleUpperCase()",
                     "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "locales - optional. String with BCP 47 language tag, or array of such."
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new string representing the calling string convert to upper case according to locale-specific case mappings."
                        }
                    ]
                },{
                    "_id": 23,
                    "title": "toLowerCase()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new string representing the calling string converted to lower case"
                        }
                    ]
                },{
                    "_id": 24,
                    "title": "toString()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A string representing the specified string value"
                        },{
                            "_id": 2,
                            "q": "Context",
                            "a": "This method is called by JS when a String object is supplied where a primitive is expected, such as in a template literal."
                        }
                    ]
                },{
                    "_id": 24,
                    "title": "toUpperCase()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new string representing the calling string converted to upper case"
                        }
                    ]
                },{
                    "_id": 25,
                    "title": "trim()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new string representing the calling string stripped of whitespace from both its beginning and end"
                        }
                    ]
                },{
                    "_id": 26,
                    "title": "trimEnd()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new string representing the calling string stripped of whitespace from its end (right side)"
                        }
                    ]
                },{
                    "_id": 27,
                    "title": "trimStart()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "_id": 1,
                            "q": "Return value",
                            "a": "A new string representing the calling string stripped of whitespace from its beginning (left side)"
                        }
                    ]
                }
            ]
        }
    ]
}
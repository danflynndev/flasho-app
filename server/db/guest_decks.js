module.exports = 
{
    "decks": [
        {
            "title": "array methods",
            "desc": "methods on javascript array prototype",
            "cards": [
                {
                    "title": "at()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Zero based index of the element to be returned. Negative index counts back from end of the array"
                        },{
                            "q": "Return value",
                            "a": "The element in the array matching the given index, or undefined"
                        }
                    ]
                },{
                    "title": "concat()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Arrays and/or values to concatenate into new array."
                        },{
                            "q": "Return value",
                            "a": "A new array with arguments added to the calling array. Returns shallow copy of array if parameters are omitted."
                        }

                    ]
                },{
                    "title": "entries()",
                    "qas": [
                        {
                            "q": "Return value",
                            "a": "A new Array Iterator object with key/value pairs for each index"
                        }
                    ]
                },{
                    "title": "every()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Callback function to execute for each element in the array. It should return a truthy to indicate th element passes the test and falsy otherwise."
                        },{
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "q": "Return value",
                            "a": "True if callback returns truthy for every array element. Otherwise, false."
                        }
                    ]
                },{
                    "title": "fill()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Value to fill array with, followed by optional start and end indexes"
                        },{
                            "q": "Return value",
                            "a": "The modified array, filled with provided value"
                        },{
                            "q": "Caveats",
                            "a": "If value arg is an object, each slot in the array will reference that object"
                        }
                    ]
                },{
                    "title": "filter()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return truthy to keep the element, and falsy otherwise."
                        },{
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "q": "Return value",
                            "a": "A shallow copy of a portion of the given array, filtered down to just the elements that pass the callback function."
                        }
                    ]
                },{
                    "title": "find()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return truthy to indicate the matching element has been found"
                        },{
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "q": "Return value",
                            "a": "First array element that satisfies the provided function. Otherwise, undefined is returned."
                        }
                    ]
                },{
                    "title": "findIndex()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return truthy to indicate a matching element is found"
                        },{
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "q": "Return value",
                            "a": "Index of the first element that passes the test. Otherwise -1."
                        }
                    ]
                },{
                    "title": "findLast()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return truthy to indicate a matching element is found"
                        },{
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "q": "Return value",
                            "a": "Value of array element with the highest index value that satisfies the provided function. Undefined if no match found"
                        }
                    ]
                },{
                    "title": "findLastIndex()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return truthy to indicate a matching element is found"
                        },{
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "q": "Return value",
                            "a": "The index of the last element in the array that passes the test. -1 if no match found"
                        }
                    ]
                },{
                    "title": "flat()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "depth - optional. Specifies how deep a nested array structure should be flattened. Default is 1."
                        },{
                            "q": "Return value",
                            "a": "A new array with the sub-array elements concatenated into it"
                        }
                    ]
                },{
                    "title": "flatMap()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Should return an array containing new elements of the new array"
                        },{
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "q": "Return value",
                            "a": "A new array with each element being the result of the callback function and flattened by a depth of 1"
                        }
                    ]
                },{
                    "title": "forEach()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Its return value is discarded"
                        },{
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "q": "Return value",
                            "a": "Undefined"
                        }
                    ]
                },{
                    "title": "includes()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "searchElement - the value to search for. fromIndex - optional, index at which to start searching."
                        },{
                            "q": "Return value",
                            "a": "True if the value searchElement is found within the array. False otherwise"
                        }
                    ]
                },{
                    "title": "indexOf()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "searchElement - element to locate in the array. fromIndex - optional, index at which to start searching."
                        },{
                            "q": "Return value",
                            "a": "The first index of the element in the array. -1 if not found"
                        }
                    ]
                },{
                    "title": "join()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "separator - optional. Specifies a string to sepearate each pair of adjacent elements. If omitted, array elements are separated with a comma."
                        },{
                            "q": "Return value",
                            "a": "A string with all array elements joined."
                        }
                    ]
                },{
                    "title": "keys()",
                    "qas": [
                        {
                                  "q": "Parameters",
                            "a": "none",
                        },{
                            "q": "Return value",
                            "a": "A new Array iterator object of the arrays keys", 
                        }
                    ]
                },{
                    "title": "lastIndexOf()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "searchElement - element to locate in the array. fromIndex - optional, index at which to start searching."
                        },{
                            "q": "Return value",
                            "a": "Last index of the element in the array. -1 if not found"
                        }
                    ]
                },{
                    "title": "map()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Callback function to execute for each element. Its return value is added as a single element in the new array."
                        },{
                            "q": "Callback parameters",
                            "a": "element, index, array"
                        },{
                            "q": "Return value",
                            "a": "A new array with each element being the result of the callback function."
                        }
                    ]
                },{
                    "title": "of()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "elementN - Elements used to create the array"
                        },{
                            "q": "Return value",
                            "a": "A new Array instance"
                        }
                    ]
                },{
                    "title": "pop()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "q": "Return value",
                            "a": "The last element of the array. Mutates array, removing that element."
                        }
                    ]
                },{
                    "title": "push()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "The element(s) to add to the end of the array"
                        },{
                            "q": "Return value",
                            "a": "The new length property of the object upon which the method was called"
                        }
                    ]
                },{
                    "title": "reduce()",
                    "qas": [
                        {
                            "q": "Parameter",
                            "a": "Callback function to execute for each element. Return value becomes the value of 'accumulator' parameter on the next invocation."
                        },{
                            "q": "Optional parameter",
                            "a": "initialValue - value to which 'accumulator' is initialized for the first callback."
                        },{
                            "q": "Callback Parameters",
                            "a": "accumulator, currentValue, currentIndex, array"
                        },{
                            "q": "Return value",
                            "a": "The value that results from running the callback function to completion over the entire array"
                        }
                    ]
                },{
                    "title": "reverse()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "q": "Return value",
                            "a": "The reference to the original array, now reversed. No copy is made."
                        }
                    ]
                },{
                    "title": "shift()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "q": "Return value",
                            "a": "The first element of the array, now removed, mutating the original array."
                        }
                    ]
                },{
                    "title": "slice()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Optional start and end index. Extracts up to but not including end."
                        },{
                            "q": "Return value",
                            "a": "A new array containing the extracted elements"
                        }
                    ]
                },{
                    "title": "some()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Callback function to execute for each array element. Should return truthy to indicate the element passes the test and falsy otherwise."
                        },{
                            "q": "Callback Parameters",
                            "a": "element, index, array"
                        },{
                            "q": "Return value",
                            "a": "True if the callback returns truthy for at least one element. Otherwise false."
                        }
                    ]
                },{
                    "title": "sort()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Optional compare function to define the sort order. If omitted, elements are converted to strings, then sorted to each characters code point value"
                        },{
                            "q": "Return value",
                            "a": "The reference to the original array, now sorted. No copy is made"
                        }
                    ]
                },{
                    "title": "splice()",
                    "qas": [
                        {
                            "q": "Parameter",
                            "a": "Index at which to start changing the array. Default is 0"
                        },{
                            "q": "Optional Parameter 1",
                            "a": "deleteCount - integer indicating number of elements to remove, beginning at start param"
                        },{
                            "q": "Optional Parameter 2",
                            "a": "itemN - Elements to add to the array, beginning from start param"
                        },{
                            "q": "Return value",
                            "a": "An array containing the deleted elements. Mutates the original"
                        }
                    ]
                },{
                    "title": "toLocaleString()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Optional language tag string or array of such. Optional options object with configuration properties"
                        },{
                            "q": "Return value",
                            "a": "A string of the array elements concatenated and separated by a local-specific String, such as a comma."
                        }
                    ]
                },{
                    "title": "toString()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "q": "Return value",
                            "a": "A string representing the specified array, concatenated and comma separated."
                        }
                    ]
                },{
                    "title": "unshift()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "elementN - the elements to add to the front of the array"
                        },{
                            "q": "Return value",
                            "a": "The new length property of the calling object"
                        }
                    ]
                },{
                    "title": "values()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "none"
                        },{
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
                    "title": "at()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Index of the string character to be returned. Negative numbers start at end of string"
                        },{
                            "q": "Return value",
                            "a": "A string containing a single UTF-16 code unit located at the index. Undefined for invalid indexes"
                        },
                    ]
                },{
                    "title": "charAt()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "An integer between 0 and str.length - 1. Default is 0."
                        },{
                            "q":"Return value",
                            "a":"A String representing the character at given index. An empty string if index is out of range."
                        }
                    ]
                },{
                    "title": "charCodeAt()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "An integer between 0 and str.length - 1. Default is 0."
                        },{
                            "q":"Return value",
                            "a":"A Number representing the UTF-16 code unit value of the character at given index. NaN if index is out of range."
                        }
                    ]
                },{
                    "title": "codePointAt()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "Index position of an element in string to return the code point value from."
                        },{
                            "q":"Return value",
                            "a": "A decimal number representing the code point value of the character. Undefined if there is no element"
                        },{
                            "q": "Caveats",
                            "a": "Make sure to iterate with for...of or forEach() as they correctly iterate UTF-16 surrogates"
                        }
                    ]
                },{
                    "title": "concat()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "One or more strings to concatenate to the calling string object."
                        },{
                            "q": "Return value",
                            "a": "A new string containing the combined text of the strings provided"
                        }
                    ]
                },{
                    "title": "endsWith()",
                    "qas": [
                        {
                            "q": "Parameter",
                            "a": "The characters to be searched for at the end of string. Cannot be a regex End position at which search string is expected to be found. Defaults to str.length"
                        },{
                            "q": "Optional parameter",
                            "a": "End position at which search string is expected to be found. Defaults to str.length"
                        },{
                            "q": "Return value",
                            "a": "True if given characters are found, otherwise False."
                        }
                    ]
                },{
                    "title": "includes()",
                    "qas": [
                        {
                            "q": "Parameter",
                            "a": "A sring to be searched for within the calling string object. Cannot be regex"
                        },{
                            "q": "Optional parameter",
                            "a": "Number position at which to begin searching. Defaults to 0"
                        },{
                            "q": "Return value",
                            "a": "True if string is found anywhere within the given string; otherwise, false"
                        }
                    ]
                },{
                    "title": "lastIndexOf()",
                    "qas": [
                        {
                            "q": "Parameter",
                            "a": "Substring to search for, coerced to a string"
                        },{
                            "q": "Optional parameter",
                            "a": "Number indicating the position at which to stop searching for the substring"
                        },{
                            "q": "Return value",
                            "a": "The index at which the last occurence of the substring begins. -1 if not found"
                        }
                    ]
                },{
                    "title": "localCompare()",
                    "qas": [
                        {
                            "q": "Parameter",
                            "a": "compareString - the string against which the referenceStr is compared"
                        },{
                            "q": "Optional parameters",
                            "a": "Locales string, and options object. Correspond to params of the Intl.Collator() constructor"
                        },{
                            "q": "Return value",
                            "a": "Negative number if referenceStr occurs before compareString; positive if referenceStr occurs after compareString; 0 if they are equivalent."
                        }
                    ]
                },{
                    "title": "match()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "A regular expession objet or object that has a Symbol.match method"
                        },{
                            "q": "Return value",
                            "a": "Array of all matches if 'g' flag is used. First match and capturing groups if no flag. Null if no matches found."
                        }
                    ]
                },{
                    "title": "matchAll()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "A regular expession object or object that has a Symbol.matchAll method."
                        },{
                            "q": "Return value",
                            "a": "An iterable iterator of matches. Each match is an array with the same shape as return value of RegExp.prototype.exec()"
                        },{
                            "q": "Caveats",
                            "a": "If param is a regex, then it must have the global 'g' flag set or a TypeError is thrown"
                        }
                    ]
                },{
                    "title": "padEnd()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "targetLength - the length of the resulting string once the current str has been padded."
                        },{
                            "q": "Optional param",
                            "a": "padString - The string to pad current str with. Truncated to stay within targetLength. Default is U+0020 or space."
                        },{
                            "q": "Return value",
                            "a": "A String of specified targetLength with the padString applied at the end of current str."
                        }
                    ]
                },{
                    "title": "padStart()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "targetLength - the length of the resulting string once the current str has been padded."
                        },{
                            "q": "Optional param",
                            "a": "padString - The string to pad current str with. Truncated to stay within targetLength. Default is U+0020 or space."
                        },{
                            "q": "Return value",
                            "a": "A String of specified targetLength with the padString applied from the start."
                        }
                    ]
                },{
                    "title": "repeat()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "count - an integer between 0 and +Infinity. Number of times to repeat the string."
                        },{
                            "q": "Return value",
                            "a": "A new string containing the specifiecnumber of copies of the given string."
                        }
                    ]
                },{
                    "title": "replace()",
                    "qas": [
                        {
                            "q": "Parameter 1",
                            "a": "pattern - a string or object with a Symbol.replace method, typically a regular expression. Otherwise coerced to a string."
                        },{
                            "q": "Parameter 2",
                            "a": "replacement - if string, replaces substring matched by pattern. If function, invoked for every match and its return value used as the replacement text"
                        },{
                            "q": "Return value",
                            "a": "A new string, with one, some, or all matches of the pattern replaced based on the argument."
                        }
                    ]
                },{
                    "title": "replaceAll()",
                    "qas": [
                        {
                            "q": "Parameter 1",
                            "a": "pattern - a string or object with Symbol.replace method, typically a regular expression. If a regex, must have global 'g' flag set, or TypeError is thrown"
                        },{
                            "q": "Parameter 2",
                            "a": "replacement - String or function. Same semantics as that of String.prototype.replace()"
                        },{
                            "q": "Return value",
                            "a": "A new string, with all matches of a pattern replaced by a replacement"
                        }
                    ]
                },{
                    "title": "search()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "A regular expression object, or any object with a Symbol.search method."
                        },{
                            "q": "Return value",
                            "a": "Index of first match between the regex and the given string. -1 if no match found."
                        }
                    ]
                },{
                    "title": "slice()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "indexStart - first character to include. indexEnd - optional. first character to exclude"
                        },{
                            "q": "Return value",
                            "a": "A new string containing the extracted section of the string"
                        }
                    ]
                },{
                    "title": "split()",
                    "qas": [
                        {
                            "q": "Parameter 1",
                            "a": "separator - optional. Pattern describing where each split should occur. If undefined, string is returned wrapped in an array."
                        },{
                            "q": "Parameter 2",
                            "a": "limit - optional. Non-negative integer specifiying limit on number of substrings to include in the array."
                        },{
                            "q": "Return value",
                            "a": "Array of strings, split at each point where separator occurs in the given string."
                        }
                    ]
                },{
                    "title": "startsWith()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "searchString - Characters to be searched at start of this string. position - optional. Start position at which searchString is expected to be found. Default 0."
                        },{
                            "q": "Return value",
                            "a": "True if given characters are found; otherwise, false."
                        }
                    ]
                },{
                    "title": "substring()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "indexStart - first character to include. indexEnd - optional. First character to exclude."
                        },{
                            "q": "Return value",
                            "a": "A new string containing the specified part of the given string"
                        }
                    ]
                },{
                    "title": "toLocaleLowerCase()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "locales - optional. String with BCP 47 language tag, or array of such."
                        },{
                            "q": "Return value",
                            "a": "A new string representing the calling string convert to lower case according to locale-specific case mappings."
                        }
                    ]
                },{
                      "title": "toLocaleUpperCase()",
                     "qas": [
                        {
                            "q": "Parameters",
                            "a": "locales - optional. String with BCP 47 language tag, or array of such."
                        },{
                            "q": "Return value",
                            "a": "A new string representing the calling string convert to upper case according to locale-specific case mappings."
                        }
                    ]
                },{
                    "title": "toLowerCase()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "q": "Return value",
                            "a": "A new string representing the calling string converted to lower case"
                        }
                    ]
                },{
                    "title": "toString()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "q": "Return value",
                            "a": "A string representing the specified string value"
                        },{
                            "q": "Context",
                            "a": "This method is called by JS when a String object is supplied where a primitive is expected, such as in a template literal."
                        }
                    ]
                },{
                    "title": "toUpperCase()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "q": "Return value",
                            "a": "A new string representing the calling string converted to upper case"
                        }
                    ]
                },{
                    "title": "trim()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "q": "Return value",
                            "a": "A new string representing the calling string stripped of whitespace from both its beginning and end"
                        }
                    ]
                },{
                    "title": "trimEnd()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "q": "Return value",
                            "a": "A new string representing the calling string stripped of whitespace from its end (right side)"
                        }
                    ]
                },{
                    "title": "trimStart()",
                    "qas": [
                        {
                            "q": "Parameters",
                            "a": "none"
                        },{
                            "q": "Return value",
                            "a": "A new string representing the calling string stripped of whitespace from its beginning (left side)"
                        }
                    ]
                }
            ]
        }
    ]
}
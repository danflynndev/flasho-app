module.exports = 
{
    "decks": [
        {
            "_id": 0,
            "title": "array methods",
            "desc": "methods on javascript array prototype",
            "cards": [
                {
                    "_id": 0,
                    "title": "at()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "parameters",
                            "a": "zero based index of the element to be returned"
                        },{
                            "_id": 1,
                            "q": "return value",
                            "a": "element matching the given index, or undefined"
                        }
                    ]
                },{
                    "_id": 1,
                    "title": "concat()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "parameters",
                            "a": "arrays and/or values to concatenate into new array"
                        },{
                            "_id": 1,
                            "q": "return value",
                            "a": "a new array with arguments added to the object which called concat"
                        }

                    ]
                },{
                    "_id": 2,
                    "title": "entries()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "return value",
                            "a": "an Array Iterator object with key/value pairs for each index"
                        }
                    ]
                }
            ]
        },{
            "_id": 1,
            "title": "string methods",
            "desc":"methods on javascript string prototype",
            "cards": [
                {
                    "_id": 0,
                    "title": "charCodeAt()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "parameters",
                            "a": "integer >= 0 and less than length. defaults to 0."
                        },{
                            "_id": 1,
                            "q":"return value",
                            "a":"a number representing the UTF-16 code unit value of the character at given index"
                        }
                    ]
                },{
                    "_id": 1,
                    "title": "at()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "parameters",
                            "a": "index of the string character to be returned. can be negative number"
                        },{
                            "_id": 1,
                            "q":"return value",
                            "a": "a string containing a single UTF-16 code unit located at the index"
                        },
                    ]
                },{
                    "_id":2,
                    "title": "codePointAt()",
                    "qas": [
                        {
                            "_id": 0,
                            "q": "parameters",
                            "a": "position of an element in string to return the code point value from."
                        },{
                            "_id":1,
                            "q":"return value",
                            "a": "a decimal number representing the code point value of the character"
                        }
                    ]
                }
            ]
        }
    ]
}
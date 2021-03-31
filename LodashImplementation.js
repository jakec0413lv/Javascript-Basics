const _ = {
    clamp(number, lower, upper){
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper)
      return clampedValue;
    },
    inRange(number, start, end){
      if(end == undefined){
        end = start;
        start = 0;
      }
      if(start > end){
        let temp = end;
        end = start;
        start = temp;
      }
      let isInRange = (start <= number && number < end);
      return isInRange;
    },
    words(s){
      let words = s.split(' ');
      return words;
    },
    pad(string, length){
      if(string.length > length){
        return string;
      }
      let beginPad = Math.floor( (length - string.length) / 2);
      let endPad = length - string.length - beginPad;
  
      for(let i = 0; i < beginPad; i++){
        string = ' ' + string;
      }
      for(let i = 0; i < endPad; i++){
        string += ' '
      }
    
      return string;
    },
    has(object, key){
      let hasValue = (object[key] != undefined)
      return hasValue;
    },
    invert(obj){
      let invertedObj = {};
      for(let key in obj){
        const originalValue = obj[key];
        invertedObj[originalValue]= key
      }
      return invertedObj;
    },
    findKey(object, predicate){
      for(let key in object){
        let value = object.key;
        let predicateReturnValue = predicate(value);
        if(predicateReturnValue === true){
          return key;
        }
      }
      return undefined;
    },
    drop(array, number){
      if(number === undefined){
        array.shift();
        return array;
      } else{
        for(let i = 0; i < number; i++){
          array.shift();
        }
      }
      return array;
    },
    dropWhile(array, predicate){
      const dropNumber = array.findIndex((element, index)=>{ return !predicate(element, index, array)
      })
      droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    chunk(array, size){
      if(size === undefined){
        size = 1;
      }
      let arrayChunks = [];
      for(let i = 0; i < array.length; i+=size){
        let newArray = array.slice(i, i + size);
        arrayChunks.push(newArray);
      }
      return arrayChunks;
    }
  
  };
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;
Object.defineProperty(Object.prototype, 'findKey', {
  value: function findKey(func) {
    const object = this;
    for(let key in object){
      const item = object[key];
      if(func(item)){
        return key;
      }
    }
    return null;
  },
  writable: false
});

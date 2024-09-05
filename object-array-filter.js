  let objects = [
        { name: 'Василий', surname: 'Васильев' },
        { name: 'Иван', surname: 'Иванов' },
        { name: 'Пётр', surname: 'Петров' }
      ]
      
      function filter(objects, key, value) {
        let result = [];
        for(let i = 0; i < objects.length; ++i) {
          if(Object.keys(objects[i]).includes(key) == true && 
      Object.values(objects[i]).includes(value) == true) {
            result.push(objects[i]);
          }
        }
        return result;
      }
      
      filter(objects);

export default filter;
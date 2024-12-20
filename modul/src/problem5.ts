{
    const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
        return obj[key];
    }

    const person = { 
        name: "Alice",
        age: 30 
    };
   
    const result = getProperty(person, "name");
    console.log(result); 
}

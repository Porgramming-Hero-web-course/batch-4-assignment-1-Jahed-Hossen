
{type Circle = {
    shape: 'circle';
    radius: number;
  };
  type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
  }; 
 type Shape = Circle | Rectangle;

const calculateShape = (shape: Shape): number => {
    if (shape.shape === 'circle') {  
      const circle= Math.PI * Math.pow(shape.radius, 2);
        return circle;
    } else if (shape.shape === 'rectangle') {
        const rectangle=shape.width * shape.height;
      return rectangle;
    } else {
      throw new Error('Invalid shape');
    }
  };
  
  const circle= calculateShape({ shape: 'circle', radius: 5 }) ;
  const rectangle= calculateShape({ shape: 'rectangle', width: 10, height: 4 });
  
  console.log(circle); 
  console.log(rectangle);
}
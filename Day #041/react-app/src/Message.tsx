//We use use function based components to create react component as thats what we use now ->older way is by using classes

//PascalCasing ->whenever we create a react component use PascalCasing
function Message() {
  //JSX: Javascript XML

  const name = "M Abhishek"; //Hello M Abhishek
  //const name = '' ; //Hello World
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;

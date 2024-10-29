// greeting component accepts a 'name' prop and displays a greeting message. The message should be "Hello, name" if a name is provided, or "Hello" if no name is provided. The name should be capitalized, regardless of how it is passed in. For example, if the name is "brian", the message should be "Hello, Brian".
function Greeting({ name }) {
  // time based greeting functionality
  const time = new Date().getHours();
  if (time < 12) {
    return (
      <div>
        <h1>Good Morning!</h1>
        {/* here we are using an or conditional. if the input is empty, the value is falsy, thus the conditional renders guest */}
        <h2>Hello, {name || "Guest"}</h2>
      </div>
    );
  } else if (time < 18) {
    return (
      <div>
        <h1>Good Afternoon!</h1>
        <h2>Hello, {name || "Guest"}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Good Evening!</h1>
        {/* here we are using a nullish coalescing operator. if the input is null or undefined, the value is falsy, thus the conditional renders guest but the empty string is passed through. */}
        <h2>Hello, {name ?? "Guest"}</h2>
      </div>
    );
  }
};

export default Greeting;

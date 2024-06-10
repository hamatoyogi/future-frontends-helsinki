function hello() {
  const x = 'hello';

  // extract & call the inner closure?

  inner();

  function inner() {
    console.log(x + ' world');
  }

  (function() {
    console.log(x + 'I am an anonymous function');
  })()
}

function hello() {
  const x = 'hello';

  // extract & call the inner closure?

  inner();

  function inner() {
    console.log(x + ' world');
  }
}

function hello() {
  const x = 'hello';
  // extract & call the inner closure?
  inner();
  function inner() {
    console.log(x + ' world');
  }
}
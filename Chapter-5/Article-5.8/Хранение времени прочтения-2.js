let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMsgDate = new WeakMap();

readMsgDate.set(messages[0], new Date(2023, 02, 21));
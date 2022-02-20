const fs = require("fs/promises");

const fileOperation = async (filePath, action = "read", data = "") => {
  switch (action) {
    case "read":
      const text = await fs.readFile(filePath, "utf8");
      console.log(text);
      break;

    case "add":
      const result = await fs.appendFile(filePath, data);
      break;

    case "replace":
      await fs.writeFile(filePath, data);
      break;

    default:
      console.log("Unknown action");
  }
};

// fileOperation("files/file.txt");
// fileOperation("files/file.txt", "add", "\n Не плюй в колодец");
// fileOperation("files/file.txt", "replace", "Новое сообщение");
fileOperation("files/file.txt", "repa", "Супер новое сообщение");

// fs.readFile("files/file.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

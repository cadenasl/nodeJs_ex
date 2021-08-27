const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>user</title></head>");
    res.write("<body><h1>Hello user</h1>");
    res.write(
      `<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>`
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url == "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>user</title></head>");
    res.write(
      "<body><ul><li>user</li><li>user</li><li>user</li><li>user</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url == "/create-user" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader("location", "/");
      res.end();
    });
  }
};

module.exports = requestHandler;

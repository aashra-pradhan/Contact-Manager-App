const errorHandler = (err, req, res, next) => {
  const statuscode = res.statusCode ? res.statusCode : 500;
  //eg.: in our createContact controller we have passed our status as 400 ni, so tyo pass garekole eta 400 nai bascha
  //if hamile, kei status code paass nagareko case ma chai 500 basthyo
  res.json({ message: err.message, stackTrace: err.stack });
  //   err.stack ni error object le nai dincha
  //n simple terms, a stack trace is a list of the method calls that the application was in the middle of when an Exception was thrown.

  // //eg. Exception in thread "main" java.lang.NullPointerException
  // at com.example.myproject.Book.getTitle(Book.java:16)
  // at com.example.myproject.Author.getBookTitles(Author.java:25)
  // at com.example.myproject.Bootstrap.main(Bootstrap.java:14)

  // This is a very simple stack trace. If we start at the beginning of the list of "at ...", we can tell where our error happened. What we're looking for is the topmost method call that is part of our application. In this case, it's:

  // at com.example.myproject.Book.getTitle(Book.java:16)
  // To debug this, we can open up Book.java and look at line 16
};

export default errorHandler;

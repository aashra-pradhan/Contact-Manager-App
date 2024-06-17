//getting all contacts
export const getContacts = async (req, res) => {
  try {
    res.status(200).json({ message: "Fetched all contacts succesfully!" });
  } catch {}
};

// getting 1 contact
export const getContact = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: `Fetched contact ${req.params.id} succesfully!` });
    // The req.params object in Express.js holds all the parameters that are included in the URL path. For instance, if you have a route defined as /user/:id, and you make a request to /user/123, then req.params.id will hold the value 123.
  } catch {}
};

// creating a contact
export const createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory!");
      // abba yaha throw new error garne bittikai error handler middleware ma jancha
    }
    res.status(201).json({ message: "Created contact succesfully!" });
  } catch {}
};

// updating a contact
export const updateContact = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: `Updated contact ${req.params.id} succesfully!` });
  } catch {}
};

// deleting a contact
export const deleteContact = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: `Contact ${req.params.id} deleted  succesfully!` });
  } catch {}
};

import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikHelpers,
} from "formik";
import React from "react";

interface Friend {
  name: string;
  email: string;
}

interface InviteFriendsForm {
  friends: Friend[];
}

const initialValues: InviteFriendsForm = {
  friends: [
    {
      name: "",
      email: "",
    },
  ],
};
interface FriendErrors {
  name?: string;
  email?: string;
}
interface Errors {
  friends?: FriendErrors[];
}
const ReactFormikList = () => {
  const handleSubmit = (
    value: InviteFriendsForm,
    { resetForm }: FormikHelpers<InviteFriendsForm>
  ) => {
    alert(JSON.stringify(value, null, 2));
    resetForm();
  };
  const validate = (values: InviteFriendsForm) => {
    const errors: Errors = {};
    values.friends.forEach((friend, index) => {
      if (!friend.name) {
        errors.friends = errors.friends || [];
        errors.friends[index] = errors.friends[index] || {};
        errors.friends[index].name = "Name is required";
      }
      if (!friend.email) {
        errors.friends = errors.friends || [];
        errors.friends[index] = errors.friends[index] || {};
        errors.friends[index].email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(friend.email)
      ) {
        errors.friends = errors.friends || [];
        errors.friends[index] = errors.friends[index] || {};
        errors.friends[index].email = "Invalid email address";
      }
    });

    return errors;
  };
  return (
    <div>
      <h2>Invite friends</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="friends">
              {({ insert, remove, push }) => (
                <div>
                  {values.friends.length > 0 &&
                    values.friends.map((friend, index) => (
                      <div className="row" key={index}>
                        <div className="col">
                          {/* input name */}
                          <label htmlFor={`friends.${index}.name`}> Name</label>
                          <Field
                            name={`friends.${index}.name`}
                            type="text"
                            placeholder="Enter friend name"
                          />
                          <ErrorMessage
                            name={`friends.${index}.name`}
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        <div className="col">
                          {/* input email */}
                          <label htmlFor={`friends.${index}.email`}>
                            Email
                          </label>
                          <Field
                            name={`friends.${index}.email`}
                            type="email"
                            placeholder="Enter friend email"
                          />
                          <ErrorMessage
                            name={`friends.${index}.email`}
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        {/* Button remove friend item */}
                        <div className="col">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => remove(index)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    ))}
                  {/* Button add friend item */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => push({ name: "", email: "" })}
                  >
                    Add friend
                  </button>
                </div>
              )}
            </FieldArray>
            {/* Button submit */}
            <button type="submit" className="btn btn-primary">
              Invite
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReactFormikList;

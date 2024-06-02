"use client";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

const DynamicInput = ({
  register,
  errors,
  placeholder,
  btnValue,
  registerName,
}) => {
  const [fields, setFields] = useState([{ id: 1, value: "" }]);

  const addField = () => {
    setFields([...fields, { id: fields.length + 1, value: "" }]);
  };

  const deleteField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <div className="flex-1">
      {fields.map((field, index) => (
        <div className="flex-1 flex gap-4" key={field.id}>
          <div className="flex-1 input-field-container relative flex items-center gap-2 mb-2">
            <HiOutlineMail className="absolute left-4 text-xl font-semibold" />
            <input
              type="text"
              className="input-field pl-12"
              placeholder={`${placeholder} ${field.id}`}
              {...register(`${registerName}${field.id}`, { required: true })}
            />
            {errors[`techs${field.id}`] && (
              <p className="text-red-500">Technology is required</p>
            )}
          </div>
          {index > 0 ? (
            <button
              type="button"
              className="btn text-red-500 ml-2"
              onClick={() => deleteField(field.id)}
            >
              Delete
            </button>
          ) : (
            <button type="button" className="btn mb-5" onClick={addField}>
              {btnValue}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicInput;

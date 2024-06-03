"use client";
import { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";

type DynamicEditInputProps = {
  register: any;
  errors: any;
  placeholder: string;
  btnValue: string;
  registerName: string;
  initialValues?: string[];
};

const DynamicEditInput = ({
  register,
  errors,
  placeholder,
  btnValue,
  registerName,
  initialValues = [],
}: DynamicEditInputProps) => {
  const [fields, setFields] = useState(
    initialValues.map((value, index) => ({ id: index + 1, value }))
  );

  const addField = () => {
    setFields([...fields, { id: fields.length + 1, value: "" }]);
  };

  const deleteField = (id: number) => {
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
              defaultValue={field.value}
              {...register(`${registerName}${field.id}`, { required: true })}
            />
            {errors[`${registerName}${field.id}`] && (
              <p className="text-red-500">{placeholder} is required</p>
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

export default DynamicEditInput;

const FormContainer = () => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* row 1 */}
      <div className="flex justify-center flex-col md:flex-row md:gap-5">
        <div className="flex-1 input-field-container relative flex items-center">
          <HiOutlineMail className="absolute left-4 text-xl font-semibold" />
          <input
            type="text"
            className="input-field pl-12"
            placeholder="Project name"
            {...register("name", { required: true })}
          />
          <label className="input-field-label">Project name</label>
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="flex-1 input-field-container relative flex items-center">
          <HiOutlineMail className="absolute left-4 text-xl font-semibold" />
          <input
            type="text"
            className="input-field pl-12"
            placeholder="Image link"
            {...register("image", { required: true })}
          />
          <label className="input-field-label">Image Link</label>
          {errors.email && <p className="text-red-500">Image Link required</p>}
        </div>
      </div>
      {/* row 2 */}
      <div className="flex justify-center flex-col md:flex-row md:gap-5">
        <div className="flex-1 input-field-container relative flex items-center">
          <HiOutlineMail className="absolute left-4 text-xl font-semibold" />
          <input
            type="text"
            className="input-field pl-12"
            placeholder="Live link"
            {...register("liveLink", { required: true })}
          />
          <label className="input-field-label">Live link</label>
          {errors.email && (
            <p className="text-red-500">Live link is required</p>
          )}
        </div>
        <div className="flex-1 input-field-container relative flex items-center">
          <HiOutlineMail className="absolute left-4 text-xl font-semibold" />
          <input
            type="text"
            className="input-field pl-12"
            placeholder="Github link"
          />
          <label className="input-field-label">Github link</label>
          {errors.email && <p className="text-red-500">Github link required</p>}
        </div>
      </div>
      {/* row 3 */}
      <div className="flex justify-center flex-col md:flex-row md:gap-5">
        <DynamicInput
          register={register}
          errors={errors}
          placeholder={"Technology"}
          btnValue="Add techs"
          registerName={"tech"}
        />
        <DynamicInput
          register={register}
          errors={errors}
          placeholder={"Feature"}
          btnValue="Add feature"
          registerName={"feature"}
        />
      </div>
      {/* row-4 */}
      <div className="relative">
        <HiOutlineMail className="absolute left-4 top-[1.6rem] text-xl font-semibold pointer-events-none" />
        <textarea
          rows={4}
          placeholder="Description"
          className="input-field w-full pl-12 pt-3"
          {...register("description", { required: true })}
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-black w-full py-3 rounded-md mt-5"
      >
        Add Project
      </button>
    </form>
  );
};

export default FormContainer;

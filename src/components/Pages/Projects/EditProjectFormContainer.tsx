"use client";
import { CreateProject } from "@/actions/CreateProject";
import { EditProject } from "@/actions/EditProject";
import DynamicEditInput from "@/components/ui/DynamicEditInput ";
import { Project } from "@/types/type";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import Swal from "sweetalert2";

const EditProjectFormContainer = ({ project }: { project: Project }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const techs: string[] = [];
    const features: string[] = [];
    console.log(data);

    Object.keys(data).forEach((key) => {
      if (key.startsWith("tech")) {
        techs.push(data[key]);
      }

      if (key.startsWith("feature")) {
        features.push(data[key]);
      }
    });

    const { _id, name, image, liveLink, githubLink, description } = data;

    const updatedProjectInfo = {
      name,
      image,
      liveLink,
      githubLink,
      description,
      features,
      techs,
    };

    try {
      const res = await EditProject(_id, updatedProjectInfo);
      Swal.fire({
        icon: "success",
        title: "Project Successfully edited",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* row 1 */}
        <div className="flex justify-center flex-col md:flex-row md:gap-5">
          <div className="flex-1 input-field-container relative flex items-center">
            <HiOutlineMail className="absolute left-4 text-xl font-semibold" />
            <input
              type="text"
              className="input-field pl-12"
              placeholder="Project name"
              defaultValue={project?.name || ""}
              {...register("name", { required: true })}
            />
            <label className="input-field-label">Project name</label>
            {errors.name && (
              <p className="text-red-500">Project name is required</p>
            )}
          </div>
          <div className="flex-1 input-field-container relative flex items-center">
            <HiOutlineMail className="absolute left-4 text-xl font-semibold" />
            <input
              type="text"
              className="input-field pl-12"
              placeholder="Image link"
              defaultValue={project?.image || ""}
              {...register("image", { required: true })}
            />
            <label className="input-field-label">Image Link</label>
            {errors.image && (
              <p className="text-red-500">Image Link is required</p>
            )}
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
              defaultValue={project?.liveLink || ""}
              {...register("liveLink", { required: true })}
            />
            <label className="input-field-label">Live link</label>
            {errors.liveLink && (
              <p className="text-red-500">Live link is required</p>
            )}
          </div>
          <div className="flex-1 input-field-container relative flex items-center">
            <HiOutlineMail className="absolute left-4 text-xl font-semibold" />
            <input
              type="text"
              className="input-field pl-12"
              placeholder="Github link"
              defaultValue={project?.githubLink || ""}
              {...register("githubLink", { required: true })}
            />
            <label className="input-field-label">Github link</label>
            {errors.githubLink && (
              <p className="text-red-500">Github link is required</p>
            )}
          </div>
        </div>
        {/* row 3 */}
        <div className="flex justify-center flex-col md:flex-row md:gap-5">
          <DynamicEditInput
            register={register}
            errors={errors}
            placeholder={"Technology"}
            btnValue="Add techs"
            registerName={"tech"}
            initialValues={project?.techs || []}
          />
          <DynamicEditInput
            register={register}
            errors={errors}
            placeholder={"Feature"}
            btnValue="Add feature"
            registerName={"feature"}
            initialValues={project?.features || []}
          />
        </div>
        {/* row 4 */}
        <div className="relative">
          <HiOutlineMail className="absolute left-4 top-[1.6rem] text-xl font-semibold pointer-events-none" />
          <textarea
            rows={4}
            placeholder="Description"
            className="input-field w-full pl-12 pt-3"
            defaultValue={project?.description || ""}
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500">Description is required</p>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-black w-full py-3 rounded-md mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProjectFormContainer;

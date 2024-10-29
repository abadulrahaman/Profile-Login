import { useForm } from 'react-hook-form'
const DataModal = (props) => {
  const { onSubmit, handleShowModal } = props

  // destructure
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <div className="bg-white h-screen w-full fixed bg-opacity-65 top-0 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-fit w-[350px] border-2 bg-white p-4 flex flex-col gap-4"
      >
        <div className="flex justify-between">
          <p className="text-xl text-black ">Basic Modal</p>
          <p
            onClick={() => {
              handleShowModal(false)
            }}
          >
            X
          </p>
        </div>

        <div className="flex justify-between">
          <p>Name:</p>
          <input className="border-2" type="text" {...register('name')} />
        </div>

        <div className="flex justify-between">
          <p>Email:</p>
          <input className="border-2" type="email" {...register('email')} />
        </div>
        <div className="flex justify-between">
          <p>Phone:</p>
          <input className="border-2" type="number" {...register('phone')} />
        </div>
        <div className="flex justify-between">
          <p>Website:</p>
          <input className="border-2" type="url" {...register('website')} />
        </div>
        <div className="flex justify-between">
          <p>Imageurl:</p>
          <input className="border-2" type="url" {...register('imageurl')} />
        </div>
        <button className="bg-blue-700 rounded-lg p-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default DataModal

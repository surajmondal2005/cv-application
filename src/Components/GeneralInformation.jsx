export default function GeneralInformation({
  generalInfo,
  setGeneralInfo,
  submit,
  toggleSubmit,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    toggleSubmit(true);
  }
  return submit ? (
    <div className="flex justify-center pt-20">
      <div className="bg-amber-50 p-6 rounded-md">
        <p>Name : {generalInfo.name}</p>
        <p>Email id : {generalInfo.email}</p>
        <p>Phone number : {generalInfo.phonenumber}</p>
        <button
          className="border-2 mt-4 mx-auto flex justify-center bg-amber-50 px-4 py-2"
          onClick={() => toggleSubmit(!submit)}
        >
          Edit
        </button>
      </div>
    </div>
  ) : (
    <section>
      <h1 className="flex justify-center items-center text-white text-2xl mb-6">
        General Information
      </h1>

      <form
        className="flex flex-col bg-amber-50 w-fit mx-auto p-6 rounded-md"
        onSubmit={handleSubmit}
      >
        <label>Name</label>
        <input
          className="border-2 border-black mb-3"
          value={generalInfo.name}
          onChange={(event) =>
            setGeneralInfo({
              ...generalInfo,
              name: event.target.value,
            })
          }
        />

        <label>Email</label>
        <input
          className="border-2 border-black mb-3"
          value={generalInfo.email}
          onChange={(event) =>
            setGeneralInfo({
              ...generalInfo,
              email: event.target.value,
            })
          }
        />

        <label>Phone Number</label>
        <input
          className="border-2 border-black"
          value={generalInfo.phonenumber}
          onChange={(event) =>
            setGeneralInfo({
              ...generalInfo,
              phonenumber: event.target.value,
            })
          }
        />
        <button
          className="border-2 mt-4 mx-auto flex justify-center bg-amber-50 px-4 py-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

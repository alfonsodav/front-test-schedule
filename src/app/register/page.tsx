'use client';
export default function RegisterEmployee() {
  function handleSumit(e: any) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('https://9z02mq6l-2426.brs.devtunnels.ms/employees', {
      method: form.method,
      body: formData,
    });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  function resetForm(e: any) {
    e.target.reset();
  }
  return (
    <form
      className="col content-center flex flex-col mx-5 px-5"
      method="post"
      onSubmit={handleSumit}
      onReset={resetForm}
    >
      <div className="text-center my-3">Register Employee</div>
      <label className="form-label" htmlFor="inputDNI">
        Card ID
      </label>
      <input type="number" className="form-control" name="cardId" id="inputDNI" />

      <label className="form-label" htmlFor="inputName">
        First Name
      </label>
      <input type="text" className="form-control" name="name" id="inputName" />

      <label className="form-label" htmlFor="inputLastName">
        Last Name
      </label>
      <input type="text" className="form-control" name="lastName" id="inputLastName" />

      <label className="form-label" htmlFor="inputName">
        bird date
      </label>
      <input type="date" className="form-control" name="birthDate" id="inputBirthdDate" />
      <div className=" container-fluid d-flex my-5">
        <button className="btn btn-warning" type="reset">
          Clear
        </button>
        <button className="btn btn-success ms-5" type="submit">
          Save Schedule
        </button>
      </div>
    </form>
  );
}

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
  return (
    <form
      className="col content-center flex flex-col mx-5 px-5"
      method="post"
      onSubmit={handleSumit}
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
      <button className="btn btn-success my-5" type="submit">
        Save Employee
      </button>
    </form>
  );
}

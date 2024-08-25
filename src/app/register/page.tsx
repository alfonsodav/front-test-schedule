'use client';

import { apiAxios } from '@/app/utils/api';
export default function RegisterEmployee() {
  async function handleSumit(e: any) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // You can pass formData as a fetch body directly:
    try {
      const response = await apiAxios('/employees', {
        method: form.method,
        body: formJson,
      });
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
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
      <input type="number" className="form-control" name="cardId" id="inputDNI" required />

      <label className="form-label" htmlFor="inputName">
        First Name
      </label>
      <input type="text" className="form-control" name="name" id="inputName" required />

      <label className="form-label" htmlFor="inputLastName">
        Last Name
      </label>
      <input type="text" className="form-control" name="lastName" id="inputLastName" required />

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

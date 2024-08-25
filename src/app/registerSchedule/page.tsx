'use client';

import { useEffect, useRef, useState } from 'react';

export default function RegisterSchedule() {
  let successEmployee = useRef(false);
  let employees: any = [];
  let [OptionsEmployees, setOptionsEmployees] = useState<any[]>([
    employees.map((employee: any) => (
      <option key={employee.id} value={employee.id}>
        {employee.name} {employee.lastName}
      </option>
    )),
  ]);
  const getEmployees = async () => {
    if (successEmployee.current) return;
    await fetch('https://9z02mq6l-2426.brs.devtunnels.ms/employees').then((response) => {
      response
        .json()
        .then((data) => {
          employees = [...data];
          console.log(employees);
          setOptionsEmployees(
            employees.map((employee: any) => (
              <option key={employee.id} value={employee.id}>
                {employee.name} {employee.lastName}
              </option>
            ))
          );
          successEmployee.current = true;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    getEmployees();
  });

  async function handleSumit(e: any) {
    e.preventDefault();
    
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    const response =await fetch('https://9z02mq6l-2426.brs.devtunnels.ms/schedules', {
      method: form.method,
      body: formData,
    });
    alert('success')

    console.log('response', response);
  }
  function resetForm(e: any) {
    e.target.reset();
  }

  return (
    <form
      className="col content-center mx-5 px-5 needs-validation"
      method="post"
      onSubmit={handleSumit}
      onReset={resetForm}
    >
      <div className="text-center my-3">Register Employee</div>
      <label className="form-label" htmlFor="inputName">
        Employee
      </label>
      <select className="form-select" name="employeeId" id="inputName" required>
        {OptionsEmployees}
      </select>

      <label className="form-label" htmlFor="inputName">
        Work Date
      </label>
      <input type="date" className="form-control" name="workDate" id="inputBirthdDate" required />
      <label className="form-label" htmlFor="inputName">
        Start Time
      </label>
      <input type="time" className="form-control" name="startTime" id="inputBirthdDate" required />
      <label className="form-label" htmlFor="inputName">
        end Time
      </label>
      <input type="time" className="form-control" name="endTime" id="inputBirthdDate" required />
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

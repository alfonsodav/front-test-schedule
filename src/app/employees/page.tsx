'use client';

import { apiAxios } from '@/app/utils/api';
export default function IndexEmployees() {
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
  return (
    <form
      className="col content-center flex flex-col mx-5 px-5"
      method="post"
      onSubmit={handleSumit}
    >

      <div className="text-center my-3">List of Employees</div>
      <table>
        <thead>
          <tr>
            <th>Card Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>2021-01-01</td>
            <td><button>Edit</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>2021-01-01</td>
            <td><button>Edit</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>2021-01-01</td>
            <td><button>Edit</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

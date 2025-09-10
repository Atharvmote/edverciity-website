import { useEffect, useState } from 'react';
import axios from 'axios';

function EnquiriesList() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/enquiries')
      .then(res => setEnquiries(res.data.enquiries))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Enquiries</h2>
      {enquiries.map(e => (
        <div key={e._id}>
          <p>Name: {e.fullName}</p>
          <p>Email: {e.email}</p>
          <p>Phone: {e.phone}</p>
          <p>Centre: {e.centre}</p>
          <p>Stream: {e.stream}</p>
          <p>Course: {e.courseId}</p>
          <p>Message: {e.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default EnquiriesList;

import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({bookingInfo, setBookingInfo, postDate}) => {
    const {user} = useContext(AuthContext)

    const date = format(postDate, 'Pp')


  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const email = form.email.value;
    const header = bookingInfo.header;
    const image = bookingInfo.image;
    const productId = bookingInfo._id
    const booking = {
         name,
         price,
         phone,
         location,
         email, 
         date,
         header,
         image,
         productId
    };
    fetch('http://localhost:5000/bookings', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        if(data.acknowledged){
          toast.success('Booked Successfully')
          setBookingInfo(null)
        }
        else{
          toast.error(data.message)
          setBookingInfo(null)
        }
      })
    
    
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            X
          </label>
      

          <h3 className="text-lg font-bold"> </h3>
          <div className="form-control">
            <input
              type="text"
              value={ bookingInfo.header}
              disabled
            //   value={date}
              className="input input-bordered"
            />
           
          </div>
          <div className="form-control mt-5">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered"
            />
           
          </div>
          <div className="card flex-shrink-0 w-full ">
            <form onSubmit={handleBooking} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  defaultValue={user.displayName}
                  disabled
                  className="input input-bordered"
                />
              </div>
             
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={user.email}
                  disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  value={bookingInfo.resaleprice}
                  disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary text-white"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
 
      </div>
    </>
  );
};

export default BookingModal;
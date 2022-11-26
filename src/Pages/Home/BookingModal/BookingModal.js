import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({bookingInfo, setBookingInfo, postDate}) => {
    const {user} = useContext(AuthContext)
    // console.log(user)

    const date = format(postDate, 'Pp')


  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const email = form.email.value;
    const booking = {
         name,
         price,
         phone,
         location,
         email
    };
     toast.success('Booked Successfully')
    // console.log(booking,price, name, phone, email,location)
    setBookingInfo(null)
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
                  placeholder="Phone Number"
                  value={bookingInfo.resalePrice}
                  disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
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
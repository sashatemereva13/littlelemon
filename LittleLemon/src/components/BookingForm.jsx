import "./BookingForm.css";

const BookingForm = () => {
  return (
    <>
      <div className="bookingFormPosition">
        <div className="bookingFormFlex">

          <form action="" method="get" class="form-example">
            <div class="form-example">
              <label for="name">Date: </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div class="form-example">
              <label for="email">Time: </label>
              <input type="email" name="email" id="email" required />
            </div>
            <div class="form-example">
              <input type="submit" value="Subscribe!" />
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default BookingForm;

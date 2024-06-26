import { bookingApi } from "../";
import useFetch from "./useFetch";

function useBookingReceive() {
  const { data: booking, ...rest } = useFetch({
    fetchFn: () => bookingApi.getReceiveBooking(),
  });
  return { booking, ...rest };
}

export default useBookingReceive;

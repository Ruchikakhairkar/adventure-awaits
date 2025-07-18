import TripPage from './TripPage';
import { weekendTrips } from '../data/treks';

const WeekendTrip = () => {
  return <TripPage title="Weekend Treks" treks={weekendTrips} />;
};

export default WeekendTrip;
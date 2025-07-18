import TripPage from './TripPage';
import { northTrips } from '../data/treks';

const NorthTrip = () => {
  return <TripPage title="North India Treks" treks={northTrips} />;
};

export default NorthTrip;
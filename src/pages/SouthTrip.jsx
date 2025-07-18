import TripPage from './TripPage';
import { southTrips } from '../data/treks';

const SouthTrip = () => {
  return <TripPage title="South India Treks" treks={southTrips} />;
};

export default SouthTrip;
import http from '@/api/http';
import { Location, rawDataToLocation } from '@/api/admin/locations/getLocations';

export default (short: string, long?: string): Promise<Location> => {
    return new Promise((resolve, reject) => {
        http.post('/api/application/locations', {
            short, long,
        })
            .then(({ data }) => resolve(rawDataToLocation(data)))
            .catch(reject);
    });
};
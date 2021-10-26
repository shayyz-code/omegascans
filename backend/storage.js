import AWS from 'aws-sdk';
import { spacesEndpoint } from '../config/index';

const spacesEp = new AWS.Endpoint(spacesEndpoint);

const s3 = new AWS.S3({ endpoint: spacesEp });

export default s3;
export const storage_config = {
  do_spaces: 'https://omegascans.sgp1.digitaloceanspaces.com',
  bucket_name: 'omegascans',
};

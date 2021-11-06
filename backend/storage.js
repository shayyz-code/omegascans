import AWS from 'aws-sdk';
import { spacesEndpoint, s3_config } from '../config/index';

const spacesEp = new AWS.Endpoint(spacesEndpoint);

const s3 = new AWS.S3({
  endpoint: spacesEp,
  accessKeyId: s3_config.accessKeyId,
  secretAccessKey: s3_config.secretAccessKey,
});

export default s3;
export const storage_config = {
  do_spaces: 'https://omegascans.sgp1.digitaloceanspaces.com',
  bucket_name: 'omegascans',
};

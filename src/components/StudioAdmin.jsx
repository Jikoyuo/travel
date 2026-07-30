import { Studio } from 'sanity';
import config from '../../sanity.config.js';

export default function StudioAdmin() {
  return <Studio config={config} />;
}

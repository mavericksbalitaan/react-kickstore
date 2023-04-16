import Inventory from '../Inventory';
import Shoes from './Shoes';
import '../stylesheets/storefront.scss';
import { Typography } from '@mui/material';

const Storefront = () => {
  return (
    <div className="storefront-wrapper">
      <Typography variant="h2" sx={{ fontFamily: "'Archivo Black', sans-serif" }}>New Releases</Typography>
      <Shoes inventory={Inventory} />
    </div >
  )
}

export default Storefront

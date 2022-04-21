import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as S from './styles';

const Switch = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<S.MaterialUISwitch 
        sx={{ m: 1 }} 
        defaultChecked 
        />}
        label
      />
    </FormGroup>
  );
}

export default Switch
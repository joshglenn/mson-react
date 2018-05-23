import compiler from '../compiler';
import Field from './field';
import FormField from './form-field';
import FormsField from './forms-field';
import IdField from './id-field';
import IntegerField from './integer-field';
import ListField from './list-field';
import NumberField from './number-field';
import SelectField from './select-field';
import TextField from './text-field';
import TextListField from './text-list-field';

// TODO: is this too inefficient? Does it block the loading thread to build? YUP! How much time is
// actually wasted compiling these components? Is there a better way to compile these core JSON
// components? Should we just create them in JS? For non-core components we can lazy load, but we
// can't really do this for the core components. **Is there a way to build the component in the
// _create() of the component so that it is done on demand**? Benchmarking: took 0-1 milliseconds to
// build EmailField/PersonFullNameField so maybe the delay is insignificant.
const EmailField = compiler.getComponent('EmailField');
const PersonFullNameField = compiler.getComponent('PersonFullNameField');
const PersonNameField = compiler.getComponent('PersonNameField');
const PasswordField = compiler.getComponent('PasswordField');

export {
  EmailField,
  Field,
  FormField,
  FormsField,
  IdField,
  IntegerField,
  ListField,
  NumberField,
  PasswordField,
  PersonFullNameField,
  PersonNameField,
  SelectField,
  TextField,
  TextListField
};
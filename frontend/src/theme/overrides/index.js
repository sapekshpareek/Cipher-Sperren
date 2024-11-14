import Button from './Button';
import Card from './Card';
import Typography from './Typography';

const componentsOverrides = (theme) => {
  const components = {};
  Object.assign(
    components,
    Button(theme),
    Card(theme),
    Typography(theme)
  );
  return components;
};

export default componentsOverrides;
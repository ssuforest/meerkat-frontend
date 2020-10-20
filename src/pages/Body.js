import React from 'react';

import Card from '../components/Card';

export default props => {
  const [name, setName] = React.useState(props.value); // hook

  React.useEffect(() => {
    setTimeout(() => {
      setName('야호');
    }, 3000);

    return () => {
      console.log('unmount!');
    };
  }, []);

  React.useEffect(() => {
    console.log('update!');
  }, [name]);

  return (
    <div className={'layout'}>
      <div className={'layout-inner'}>
        <div className={'layout-main'}>
          <Card text={'hello world!'} />
        </div>
        <div className={'layout-side'}>
          <span>B</span>
        </div>
      </div>
    </div>
  );
};
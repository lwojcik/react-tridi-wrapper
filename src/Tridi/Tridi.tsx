import React, { useState, useEffect } from 'react';
import * as TridiLibrary from 'tridi';
import { TridiOptions } from 'tridi';

const Tridi = (options: TridiOptions) => {
  const { element } = options;
  const identifier = (element as string).charAt(0) === '.'
    ? 'className'
    : 'id';

  const tridiInstance = TridiLibrary.create(options);

  const [
    tridiOptions,
    setTridiOptions,
  ] = useState(options);

  useEffect(() => {
    tridiInstance.load();
  }, []);

  useEffect(() => {
    setTridiOptions(options);
  }, [options]);

  useEffect(() => {
    tridiInstance.update(tridiOptions);
  }, [tridiOptions]);

  const tridiProps = {
    [identifier]: (element as string).substring(1),
  };

  return (
    <div {...tridiProps} />
  );
};

export default Tridi;

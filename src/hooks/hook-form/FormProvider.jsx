// form
import React from 'react';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------
export default function FormProvider({
  children,
  onSubmit,
  onChange,
  methods,
}) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} onChange={onChange}>
        {children}
      </form>
    </Form>
  );
}

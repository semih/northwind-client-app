import { Formik, Form, Field } from "formik";
import React from "react";
import * as Yup from "yup";
//yup is used for validation
import { FormField, Button } from "semantic-ui-react";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <FormField>
            <Field name="productName" placeholder="Ürün Adı"></Field>
          </FormField>
          <FormField>
            <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
          </FormField>
          <Button color="green" type="submit"></Button>
        </Form>
      </Formik>
    </div>
  );
}

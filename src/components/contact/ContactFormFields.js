import { yupResolver } from "@hookform/resolvers/yup";
import { Grid } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import schema from "../../utils/schemas/yupSchema";
import { contactFields } from "./contact_config";
import ContactFormOptions from "./ContactFormOptions";
import ReusableTextField from "./ReusableTextField";
import { sendContactData } from "src/functions/backend";

export default function ContactFormFields({ t, modal }) {
  //select option state handler
  const [subjectValidation, setSubjectValidation] = React.useState(false);

  //React hook form validation with yupSchema
  const {
    handleSubmit,
    setValue,
    getValues,
    formState: {
      isValid,
      isSubmitting,
      isSubmitSuccessful,
      isSubmitted
    },
    control
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
      company_name: ""
    }
  });

  //handle change for subject field
 
  return (
    <Grid item className="contact-form formsection">
      <ContactFormOptions
        setSubject={setValue}
        getSubject={getValues}
        valid={isValid}
        sendSubjectState={setSubjectValidation}
      />
      {contactFields.map(cf => (
        <Controller
          key={cf.index}
          render={({
            field,
            formState,
            fieldState: { isDirty, invalid },
            value
          }) => (
            <>
              <ReusableTextField
                id={cf.label}
                sup={cf.sup}
                errorState={!!formState.errors[cf.index]}
                errorText={t(formState.errors[cf.index]?.message, {
                  ns: "formerror"
                })}
                fieldName={t(cf.label)}
                field={field}
              />
            </>
          )}
          name={cf.index}
          control={control}
        />
      ))}

      <div>
        <Controller
          render={({ field, formState, fieldState: { isDirty, invalid } }) => (
            <div className="telephone-field">
              <div className="tel">
                <label htmlFor={"phone"}>
                  <span>
                    {t("phone.tel")} <sup>*</sup>
                  </span>
                  <MuiPhoneNumber
                    tabIndex={"1"}
                    defaultCountry={"cm"}
                    className={!!formState.errors?.phone ? "error" : ""}
                    id="phone"
                    enableLongNumbers
                    fullWidth
                    variant="outlined"
                    {...field}
                  />
                </label>
              </div>
              {!!formState.errors?.phone && (
                <span className="phone-error">
                  {t(formState.errors.phone?.message, { ns: "formerror" })}
                </span>
              )}
            </div>
          )}
          name={"phone_number"}
          control={control}
        />
      </div>
      <Controller
        render={({ field, formState, fieldState: { isDirty, invalid } }) => (
          <>
            <div
              className={
                !!formState.errors?.message
                  ? "input message-area problem"
                  : "input message-area"
              }
            >
              <label htmlFor={"message"}>
                <span>{t("message")}</span>
                <textarea id="message" {...field}></textarea>
              </label>
            </div>
          </>
        )}
        name={"message"}
        control={control}
      />

      <button
        onClick={handleSubmit(data => {
          sendContactData(data);
       })}
        className="contact-submitbutton"
      
        disabled={
          !(isValid && subjectValidation) &&
          !(isSubmitted && !isSubmitSuccessful)
        }
      >
        {!isSubmitting &&
          !isSubmitSuccessful &&
          !isSubmitted &&
          t("button.normal")}
        {isSubmitting && t("button.submitting")}
        {isSubmitSuccessful && t("button.success")}
        {isSubmitted && !isSubmitSuccessful && t("button.error")}
      </button>
    </Grid>
  );
}

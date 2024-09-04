/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getFieldworker } from "../graphql/queries";
import { updateFieldworker } from "../graphql/mutations";
const client = generateClient();
export default function FieldworkerUpdateForm(props) {
  const {
    id: idProp,
    fieldworker: fieldworkerModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fwname: "",
    fwlocation: "",
    jobassgned: "",
    jobstatus: false,
    jobcompletiondateandtime: "",
    jobiuploadmage: "",
  };
  const [fwname, setFwname] = React.useState(initialValues.fwname);
  const [fwlocation, setFwlocation] = React.useState(initialValues.fwlocation);
  const [jobassgned, setJobassgned] = React.useState(initialValues.jobassgned);
  const [jobstatus, setJobstatus] = React.useState(initialValues.jobstatus);
  const [jobcompletiondateandtime, setJobcompletiondateandtime] =
    React.useState(initialValues.jobcompletiondateandtime);
  const [jobiuploadmage, setJobiuploadmage] = React.useState(
    initialValues.jobiuploadmage
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = fieldworkerRecord
      ? { ...initialValues, ...fieldworkerRecord }
      : initialValues;
    setFwname(cleanValues.fwname);
    setFwlocation(cleanValues.fwlocation);
    setJobassgned(cleanValues.jobassgned);
    setJobstatus(cleanValues.jobstatus);
    setJobcompletiondateandtime(cleanValues.jobcompletiondateandtime);
    setJobiuploadmage(cleanValues.jobiuploadmage);
    setErrors({});
  };
  const [fieldworkerRecord, setFieldworkerRecord] =
    React.useState(fieldworkerModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getFieldworker.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFieldworker
        : fieldworkerModelProp;
      setFieldworkerRecord(record);
    };
    queryData();
  }, [idProp, fieldworkerModelProp]);
  React.useEffect(resetStateValues, [fieldworkerRecord]);
  const validations = {
    fwname: [],
    fwlocation: [],
    jobassgned: [],
    jobstatus: [],
    jobcompletiondateandtime: [],
    jobiuploadmage: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fwname: fwname ?? null,
          fwlocation: fwlocation ?? null,
          jobassgned: jobassgned ?? null,
          jobstatus: jobstatus ?? null,
          jobcompletiondateandtime: jobcompletiondateandtime ?? null,
          jobiuploadmage: jobiuploadmage ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateFieldworker.replaceAll("__typename", ""),
            variables: {
              input: {
                id: fieldworkerRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FieldworkerUpdateForm")}
      {...rest}
    >
      <TextField
        label="Fwname"
        isRequired={false}
        isReadOnly={false}
        value={fwname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fwname: value,
              fwlocation,
              jobassgned,
              jobstatus,
              jobcompletiondateandtime,
              jobiuploadmage,
            };
            const result = onChange(modelFields);
            value = result?.fwname ?? value;
          }
          if (errors.fwname?.hasError) {
            runValidationTasks("fwname", value);
          }
          setFwname(value);
        }}
        onBlur={() => runValidationTasks("fwname", fwname)}
        errorMessage={errors.fwname?.errorMessage}
        hasError={errors.fwname?.hasError}
        {...getOverrideProps(overrides, "fwname")}
      ></TextField>
      <TextField
        label="Fwlocation"
        isRequired={false}
        isReadOnly={false}
        value={fwlocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fwname,
              fwlocation: value,
              jobassgned,
              jobstatus,
              jobcompletiondateandtime,
              jobiuploadmage,
            };
            const result = onChange(modelFields);
            value = result?.fwlocation ?? value;
          }
          if (errors.fwlocation?.hasError) {
            runValidationTasks("fwlocation", value);
          }
          setFwlocation(value);
        }}
        onBlur={() => runValidationTasks("fwlocation", fwlocation)}
        errorMessage={errors.fwlocation?.errorMessage}
        hasError={errors.fwlocation?.hasError}
        {...getOverrideProps(overrides, "fwlocation")}
      ></TextField>
      <TextField
        label="Jobassgned"
        isRequired={false}
        isReadOnly={false}
        value={jobassgned}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fwname,
              fwlocation,
              jobassgned: value,
              jobstatus,
              jobcompletiondateandtime,
              jobiuploadmage,
            };
            const result = onChange(modelFields);
            value = result?.jobassgned ?? value;
          }
          if (errors.jobassgned?.hasError) {
            runValidationTasks("jobassgned", value);
          }
          setJobassgned(value);
        }}
        onBlur={() => runValidationTasks("jobassgned", jobassgned)}
        errorMessage={errors.jobassgned?.errorMessage}
        hasError={errors.jobassgned?.hasError}
        {...getOverrideProps(overrides, "jobassgned")}
      ></TextField>
      <SwitchField
        label="Jobstatus"
        defaultChecked={false}
        isDisabled={false}
        isChecked={jobstatus}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              fwname,
              fwlocation,
              jobassgned,
              jobstatus: value,
              jobcompletiondateandtime,
              jobiuploadmage,
            };
            const result = onChange(modelFields);
            value = result?.jobstatus ?? value;
          }
          if (errors.jobstatus?.hasError) {
            runValidationTasks("jobstatus", value);
          }
          setJobstatus(value);
        }}
        onBlur={() => runValidationTasks("jobstatus", jobstatus)}
        errorMessage={errors.jobstatus?.errorMessage}
        hasError={errors.jobstatus?.hasError}
        {...getOverrideProps(overrides, "jobstatus")}
      ></SwitchField>
      <TextField
        label="Jobcompletiondateandtime"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          jobcompletiondateandtime &&
          convertToLocal(new Date(jobcompletiondateandtime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              fwname,
              fwlocation,
              jobassgned,
              jobstatus,
              jobcompletiondateandtime: value,
              jobiuploadmage,
            };
            const result = onChange(modelFields);
            value = result?.jobcompletiondateandtime ?? value;
          }
          if (errors.jobcompletiondateandtime?.hasError) {
            runValidationTasks("jobcompletiondateandtime", value);
          }
          setJobcompletiondateandtime(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "jobcompletiondateandtime",
            jobcompletiondateandtime
          )
        }
        errorMessage={errors.jobcompletiondateandtime?.errorMessage}
        hasError={errors.jobcompletiondateandtime?.hasError}
        {...getOverrideProps(overrides, "jobcompletiondateandtime")}
      ></TextField>
      <TextField
        label="Jobiuploadmage"
        isRequired={false}
        isReadOnly={false}
        value={jobiuploadmage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fwname,
              fwlocation,
              jobassgned,
              jobstatus,
              jobcompletiondateandtime,
              jobiuploadmage: value,
            };
            const result = onChange(modelFields);
            value = result?.jobiuploadmage ?? value;
          }
          if (errors.jobiuploadmage?.hasError) {
            runValidationTasks("jobiuploadmage", value);
          }
          setJobiuploadmage(value);
        }}
        onBlur={() => runValidationTasks("jobiuploadmage", jobiuploadmage)}
        errorMessage={errors.jobiuploadmage?.errorMessage}
        hasError={errors.jobiuploadmage?.hasError}
        {...getOverrideProps(overrides, "jobiuploadmage")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || fieldworkerModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || fieldworkerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

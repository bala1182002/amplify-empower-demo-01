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
  Heading,
  SwitchField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { generateClient } from "aws-amplify/api";
import { createFieldworker } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";
const client = generateClient();
export default function FieldworkerCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    fwname: "",
    fwlocation: "",
    jobassgned: "",
    jobstatus: false,
    jobcompletiondateandtime: "",
    jobiuploadmage: undefined,
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
    setFwname(initialValues.fwname);
    setFwlocation(initialValues.fwlocation);
    setJobassgned(initialValues.jobassgned);
    setJobstatus(initialValues.jobstatus);
    setJobcompletiondateandtime(initialValues.jobcompletiondateandtime);
    setJobiuploadmage(initialValues.jobiuploadmage);
    setErrors({});
  };
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
      padding={tokens.space.xxxl.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fwname,
          fwlocation,
          jobassgned,
          jobstatus,
          jobcompletiondateandtime,
          jobiuploadmage,
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
            query: createFieldworker.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FieldworkerCreateForm")}
      {...rest}
    >
      <Heading
        level={1}
        children="Field Workers Demo App"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
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
      <Field
        errorMessage={errors.jobiuploadmage?.errorMessage}
        hasError={errors.jobiuploadmage?.hasError}
        label={"Jobiuploadmage"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setJobiuploadmage((prev) => {
              let value = key;
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
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setJobiuploadmage((prev) => {
              let value = initialValues?.jobiuploadmage;
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
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={["image/*"]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "jobiuploadmage")}
        ></StorageManager>
      </Field>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FieldworkerCreateFormInputValues = {
    fwname?: string;
    fwlocation?: string;
    jobassgned?: string;
    jobstatus?: boolean;
    jobcompletiondateandtime?: string;
    jobiuploadmage?: string;
};
export declare type FieldworkerCreateFormValidationValues = {
    fwname?: ValidationFunction<string>;
    fwlocation?: ValidationFunction<string>;
    jobassgned?: ValidationFunction<string>;
    jobstatus?: ValidationFunction<boolean>;
    jobcompletiondateandtime?: ValidationFunction<string>;
    jobiuploadmage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FieldworkerCreateFormOverridesProps = {
    FieldworkerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    fwname?: PrimitiveOverrideProps<TextFieldProps>;
    fwlocation?: PrimitiveOverrideProps<TextFieldProps>;
    jobassgned?: PrimitiveOverrideProps<TextFieldProps>;
    jobstatus?: PrimitiveOverrideProps<SwitchFieldProps>;
    jobcompletiondateandtime?: PrimitiveOverrideProps<TextFieldProps>;
    jobiuploadmage?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type FieldworkerCreateFormProps = React.PropsWithChildren<{
    overrides?: FieldworkerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FieldworkerCreateFormInputValues) => FieldworkerCreateFormInputValues;
    onSuccess?: (fields: FieldworkerCreateFormInputValues) => void;
    onError?: (fields: FieldworkerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FieldworkerCreateFormInputValues) => FieldworkerCreateFormInputValues;
    onValidate?: FieldworkerCreateFormValidationValues;
} & React.CSSProperties>;
export default function FieldworkerCreateForm(props: FieldworkerCreateFormProps): React.ReactElement;
